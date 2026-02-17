import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROLE_META } from '../../data/tasks';
import {
  fetchTournamentLeaderboard,
  fetchAllTimeLeaderboard,
  fetchPlayerRank,
  fetchPlayerEntry,
  fetchTotalPlayers,
  type LeaderboardEntry,
} from '../../lib/supabase';
import { getCurrentTournamentId, formatTournamentRange } from '../../lib/tournament';
import type { PlayerRole } from '../../types';

type Tab = 'week' | 'alltime';

interface LeaderboardProps {
  playerNickname: string;
}

const TAB_CONFIG: { id: Tab; label: string }[] = [
  { id: 'week', label: 'Текущий турнир' },
  { id: 'alltime', label: 'Все турниры' },
];

const RANK_COLORS: Record<number, string> = {
  1: '#FFD700',
  2: '#C0C0C0',
  3: '#CD7F32',
};

export function Leaderboard({ playerNickname }: LeaderboardProps) {
  const [tab, setTab] = useState<Tab>('week');
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [playerRank, setPlayerRank] = useState<{ rank: number | null; total: number } | null>(null);
  const [playerEntry, setPlayerEntry] = useState<LeaderboardEntry | null>(null);

  const effectiveNick = playerNickname;

  const tournamentId = getCurrentTournamentId();
  const tournamentRange = formatTournamentRange(tournamentId);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setPlayerRank(null);
    setPlayerEntry(null);

    const load = async () => {
      try {
        let result: LeaderboardEntry[];
        switch (tab) {
          case 'week':
            result = await fetchTournamentLeaderboard(tournamentId);
            break;
          case 'alltime':
            result = await fetchAllTimeLeaderboard(tournamentId);
            break;
        }
        if (!cancelled) setData(result);
      } catch {
        if (!cancelled) setData([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    // Fetch player rank + entry in parallel; always fetch total count
    const loadPlayerInfo = async () => {
      try {
        if (effectiveNick) {
          const [rank, entry] = await Promise.all([
            fetchPlayerRank(effectiveNick, tournamentId),
            fetchPlayerEntry(effectiveNick, tournamentId),
          ]);
          if (!cancelled) {
            setPlayerRank(rank);
            setPlayerEntry(entry);
          }
        } else {
          // No nickname — just fetch total count
          const total = await fetchTotalPlayers(tournamentId);
          if (!cancelled) {
            setPlayerRank({ rank: null, total });
            setPlayerEntry(null);
          }
        }
      } catch {
        // ignore
      }
    };

    load();
    loadPlayerInfo();
    return () => { cancelled = true; };
  }, [tab, tournamentId, effectiveNick]);

  const renderRow = (entry: LeaderboardEntry, rank: number) => {
    const isPlayer =
      effectiveNick && entry.nickname.toLowerCase() === effectiveNick.toLowerCase();
    const rankColor = RANK_COLORS[rank];
    const roleMeta =
      ROLE_META[entry.role as PlayerRole] ?? { icon: '?', color: '#888' };

    return (
      <div
        key={`${entry.id}-${rank}`}
        className={`
          grid grid-cols-[2rem_1fr_auto_3.5rem] gap-1 items-center
          px-3 py-2 text-xs border-b border-gray-800/30
          ${isPlayer ? 'bg-neon-purple/10' : ''}
        `}
      >
        <span
          className="font-black tabular-nums"
          style={{ color: rankColor ?? (isPlayer ? '#bf5af2' : '#6b7280') }}
        >
          {rank}
        </span>
        <div className="min-w-0">
          <div
            className={`font-bold truncate ${
              isPlayer ? 'text-neon-purple' : 'text-white'
            }`}
          >
            {entry.nickname}
          </div>
        </div>
        <span title={entry.role} className="text-sm">
          {roleMeta.icon}
        </span>
        <span className="text-right font-black tabular-nums text-white">
          {entry.score.toLocaleString()}
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full"
    >
      {/* Title */}
      <div className="text-center mb-3">
        <h2 className="text-sm font-bold text-neon-purple uppercase tracking-wider">
          Рейтинг
        </h2>
        {tab === 'week' && (
          <p className="text-[10px] text-gray-500 mt-0.5">Турнир: {tournamentRange}</p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-3 bg-gray-800/50 rounded-lg p-1">
        {TAB_CONFIG.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`
              flex-1 py-1.5 px-2 rounded-md text-xs font-bold uppercase tracking-wider
              transition-all cursor-pointer
              ${tab === t.id
                ? 'bg-neon-purple/20 text-neon-purple'
                : 'text-gray-500 hover:text-gray-300'
              }
            `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-bg-column/70 rounded-xl border border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[2rem_1fr_auto_3.5rem] gap-1 px-3 py-2 text-[9px] text-gray-500 uppercase tracking-wider border-b border-gray-800/50">
          <span>#</span>
          <span>Игрок</span>
          <span>Роль</span>
          <span className="text-right">Счёт</span>
        </div>

        {/* Body */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center text-gray-500 text-xs"
            >
              Загрузка...
            </motion.div>
          ) : data.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center text-gray-500 text-xs"
            >
              {tab === 'alltime' ? 'Пока нет завершённых турниров' : 'Пока пусто — будь первым!'}
            </motion.div>
          ) : (
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {data.map((entry, idx) => {
                const rank = idx + 1;
                return renderRow(entry, rank);
              })}

              {/* "..." + player row if they're outside top */}
              {playerRank?.rank != null &&
                playerRank.rank > data.length &&
                playerEntry && (
                  <>
                    <div className="px-3 py-1 text-center text-gray-600 text-xs tracking-widest border-b border-gray-800/30">
                      ···
                    </div>
                    {renderRow(playerEntry, playerRank.rank)}
                  </>
                )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Player rank footer */}
        {playerRank && playerRank.total > 0 && (
          <div className="px-3 py-2 border-t border-gray-800/50 flex items-center justify-between text-[10px] text-gray-500">
            <span>
              Всего игроков: <span className="text-gray-400 font-bold">{playerRank.total}</span>
            </span>
            {playerRank.rank !== null && effectiveNick && playerEntry && (
              <span>
                Ты: <span className="text-neon-purple font-bold">#{playerRank.rank}</span>
                <span className="text-gray-600"> из {playerRank.total}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
