import { useGameStore } from '../../store/gameStore';
import type { ColumnId } from '../../types';

const COLUMNS: { id: ColumnId; label: string; color: string }[] = [
  { id: 'backlog', label: 'B', color: '#8e8e93' },
  { id: 'todo', label: 'T', color: '#ffe600' },
  { id: 'inProgress', label: 'P', color: '#00d4ff' },
  { id: 'done', label: 'D', color: '#39ff14' },
];

export function TaskCounts() {
  const tasks = useGameStore((s) => s.tasks);

  return (
    <div className="flex items-center gap-2">
      {COLUMNS.map(({ id, label, color }) => {
        const count = tasks.filter((t) => t.column === id && !t.exploding).length;
        return (
          <div key={id} className="flex items-center gap-0.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span
              className="text-[9px] font-bold tabular-nums leading-none"
              style={{ color }}
            >
              {label}{count}
            </span>
          </div>
        );
      })}
    </div>
  );
}
