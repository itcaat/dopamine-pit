-- iKanban Leaderboard Schema
-- Run this in Supabase SQL Editor

create table leaderboard (
  id uuid default gen_random_uuid() primary key,
  nickname text not null check (char_length(nickname) between 1 and 30),
  company text check (company is null or char_length(company) <= 50),
  score integer not null check (score >= 0 and score <= 50000),
  survival_time real not null check (survival_time >= 0),
  tasks_completed integer not null check (tasks_completed >= 0),
  max_combo integer not null check (max_combo >= 0),
  role text not null,
  tournament_id text not null,  -- Friday date: '2026-02-13'
  created_at timestamptz default now()
);

-- RLS
alter table leaderboard enable row level security;
create policy "Anyone can read" on leaderboard for select using (true);
create policy "Anyone can insert" on leaderboard for insert with check (true);

-- Indexes
create index idx_leaderboard_score on leaderboard (score desc);
create index idx_leaderboard_tournament on leaderboard (tournament_id, score desc);
create index idx_leaderboard_company on leaderboard (company, score desc);
create index idx_leaderboard_nickname on leaderboard (nickname, tournament_id);

-- ============================================
-- Player stats (games played counter)
-- ============================================

create table player_stats (
  nickname text primary key,
  games_played integer not null default 0,
  updated_at timestamptz default now()
);

alter table player_stats enable row level security;
create policy "Anyone can read stats" on player_stats for select using (true);
create policy "Anyone can insert stats" on player_stats for insert with check (true);
create policy "Anyone can update stats" on player_stats for update using (true);

-- Atomic increment function
create or replace function increment_games(p_nickname text)
returns integer
language plpgsql
as $$
declare
  new_count integer;
begin
  insert into player_stats (nickname, games_played, updated_at)
  values (p_nickname, 1, now())
  on conflict (nickname)
  do update set
    games_played = player_stats.games_played + 1,
    updated_at = now();

  select games_played into new_count
  from player_stats
  where nickname = p_nickname;

  return new_count;
end;
$$;

-- Note: all game results are stored (no upsert, no cleanup).
-- Leaderboard queries use ORDER BY score DESC to show top results.

-- ============================================
-- Tournament announcements (pg_cron + pg_net)
-- ============================================
-- Enable extensions (run once in Supabase SQL Editor):
--   create extension if not exists pg_cron;
--   create extension if not exists pg_net;
--
-- Schedule tournament results + new tournament every Friday at 09:00 UTC (12:00 MSK):
-- Replace <YOUR_SUPABASE_URL> and <YOUR_SERVICE_ROLE_KEY> with actual values.
--
-- select cron.schedule(
--   'tournament-announce',
--   '0 9 * * 5',
--   $$
--   select net.http_post(
--     url := '<YOUR_SUPABASE_URL>/functions/v1/tournament-announce',
--     headers := jsonb_build_object(
--       'Content-Type', 'application/json',
--       'Authorization', 'Bearer <YOUR_SERVICE_ROLE_KEY>'
--     ),
--     body := '{}'::jsonb
--   );
--   $$
-- );
--
-- Schedule daily standings every day at 09:00 UTC (12:00 MSK), except Friday (handled above):
--
-- select cron.schedule(
--   'daily-standings',
--   '0 9 * * 0-4,6',
--   $$
--   select net.http_post(
--     url := '<YOUR_SUPABASE_URL>/functions/v1/daily-standings',
--     headers := jsonb_build_object(
--       'Content-Type', 'application/json',
--       'Authorization', 'Bearer <YOUR_SERVICE_ROLE_KEY>'
--     ),
--     body := '{}'::jsonb
--   );
--   $$
-- );
