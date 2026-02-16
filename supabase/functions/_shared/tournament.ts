const BOUNDARY_OFFSET_MS = 9 * 3600_000; // 09:00 UTC = 12:00 MSK

export function getCurrentTournamentId(): string {
  const now = new Date();
  const shifted = new Date(now.getTime() - BOUNDARY_OFFSET_MS);
  const day = shifted.getUTCDay();
  const diff = (day + 2) % 7;
  const friday = new Date(shifted);
  friday.setUTCDate(shifted.getUTCDate() - diff);
  return friday.toISOString().slice(0, 10);
}

export function getPreviousTournamentId(): string {
  const currentId = getCurrentTournamentId();
  const date = new Date(currentId + "T09:00:00Z");
  date.setUTCDate(date.getUTCDate() - 7);
  return date.toISOString().slice(0, 10);
}

export function formatDateRange(tournamentId: string): string {
  const start = new Date(tournamentId + "T09:00:00Z");
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 7);

  const fmt = (d: Date) => {
    const day = d.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      timeZone: "Europe/Moscow",
    });
    const time = d.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Moscow",
    });
    return `${day} ${time}`;
  };

  return `${fmt(start)} – ${fmt(end)} МСК`;
}

export function daysLeft(tournamentId: string): number {
  const end = new Date(tournamentId + "T09:00:00Z");
  end.setUTCDate(end.getUTCDate() + 7);
  const now = new Date();
  return Math.max(0, Math.ceil((end.getTime() - now.getTime()) / 86400_000));
}
