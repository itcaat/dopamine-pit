# TODO

## Лидерборд (Supabase)

Дневной рейтинг игроков без аутентификации — игрок вводит ник и играет.

### План

1. Создать проект в Supabase, таблицу `scores` и RLS-политики (SQL ниже)
2. Установить `@supabase/supabase-js`, создать клиент с URL + anon key
3. Добавить ввод никнейма на стартовом экране, сохранить в сторе
4. Отправлять результат в Supabase при game over
5. Компонент лидерборда — топ-10 за сегодня на экране game over

### SQL-миграция

```sql
create table if not exists scores (
  id uuid default gen_random_uuid() primary key,
  nickname text not null,
  role text not null,
  score integer not null,
  survival_time real not null,
  tasks_completed integer not null default 0,
  max_combo integer not null default 0,
  created_at timestamptz default now()
);

create index idx_scores_daily on scores (created_at desc, score desc);

alter table scores enable row level security;

create policy "Anyone can read scores"
  on scores for select using (true);

create policy "Anyone can insert scores"
  on scores for insert with check (true);
```
