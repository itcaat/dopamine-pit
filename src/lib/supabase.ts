import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigured = !!(SUPABASE_URL && SUPABASE_ANON_KEY);

// Only create client if both env vars are present; otherwise leave null
export const supabase: SupabaseClient | null = supabaseConfigured
  ? createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)
  : null;

function ensureClient(): SupabaseClient {
  if (!supabase) throw new Error('Supabase is not configured');
  return supabase;
}

export interface LeaderboardEntry {
  id: string;
  nickname: string;
  score: number;
  survival_time: number;
  tasks_completed: number;
  max_combo: number;
  role: string;
  tournament_id: string;
  created_at: string;
}

/** Submit a new score via rate-limited RPC (max 1 per minute per nickname) */
export async function submitScore(entry: Omit<LeaderboardEntry, 'id' | 'created_at'>) {
  const db = ensureClient();
  const { error } = await db.rpc('submit_score_safe', {
    p_nickname: entry.nickname,
    p_score: entry.score,
    p_survival_time: entry.survival_time,
    p_tasks_completed: entry.tasks_completed,
    p_max_combo: entry.max_combo,
    p_role: entry.role,
    p_tournament_id: entry.tournament_id,
  });
  if (error) throw error;
}

/** Fetch leaderboard for a specific tournament (best score per player) */
export async function fetchTournamentLeaderboard(tournamentId: string, limit = 3) {
  const db = ensureClient();
  const { data, error } = await db.rpc('get_tournament_top', {
    p_tournament_id: tournamentId,
    p_limit: limit,
  });
  if (error) throw error;
  return (data ?? []) as LeaderboardEntry[];
}

/** Fetch all-time leaderboard: only #1 winner from each past tournament */
export async function fetchAllTimeLeaderboard(currentTournamentId: string, limit = 3) {
  const db = ensureClient();
  const { data, error } = await db
    .from('leaderboard')
    .select('*')
    .neq('tournament_id', currentTournamentId)
    .order('score', { ascending: false })
    .limit(500);
  if (error) throw error;

  // Keep only #1 per tournament (data is sorted by score desc)
  const seenTournaments = new Set<string>();
  const winners: LeaderboardEntry[] = [];
  for (const row of (data ?? []) as LeaderboardEntry[]) {
    if (!seenTournaments.has(row.tournament_id)) {
      seenTournaments.add(row.tournament_id);
      winners.push(row);
    }
    if (winners.length >= limit) break;
  }
  return winners;
}

/** Fetch a player's best entry for a given tournament (for "your position" row) */
export async function fetchPlayerEntry(
  nickname: string,
  tournamentId: string,
): Promise<LeaderboardEntry | null> {
  const db = ensureClient();
  const { data } = await db
    .from('leaderboard')
    .select('*')
    .eq('nickname', nickname)
    .eq('tournament_id', tournamentId)
    .order('score', { ascending: false })
    .limit(1)
    .maybeSingle();
  return (data as LeaderboardEntry) ?? null;
}

/** Fetch player's rank and total player count (unique players, best scores) */
export async function fetchPlayerRank(
  nickname: string,
  tournamentId: string,
): Promise<{ rank: number | null; total: number }> {
  const db = ensureClient();
  const { data, error } = await db.rpc('get_player_rank', {
    p_nickname: nickname,
    p_tournament_id: tournamentId,
  });
  if (error) throw error;
  if (!data || (Array.isArray(data) && data.length === 0)) return { rank: null, total: 0 };
  const row = Array.isArray(data) ? data[0] : data;
  return { rank: row.rank ?? null, total: row.total ?? 0 };
}

/** Fetch total unique player count for a tournament */
export async function fetchTotalPlayers(
  tournamentId: string,
): Promise<number> {
  const db = ensureClient();
  const { data, error } = await db.rpc('count_tournament_players', {
    p_tournament_id: tournamentId,
  });
  if (error) throw error;
  return (data as number) ?? 0;
}

/** Atomically increment games_played for a nickname. Returns new count. */
export async function incrementGames(nickname: string): Promise<number> {
  const db = ensureClient();
  const { data, error } = await db.rpc('increment_games', { p_nickname: nickname });
  if (error) throw error;
  return (data as number) ?? 0;
}
