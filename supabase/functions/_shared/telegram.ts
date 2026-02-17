export const MEDALS = ["🥇", "🥈", "🥉"];

export function pickRandom(phrases: string[]): string {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export function formatLeaderboard(
  entries: { nickname: string; score: number }[],
): string {
  return entries
    .map((entry, i) => {
      const medal = MEDALS[i] ?? `<b>${i + 1}.</b>`;
      return `${medal} ${entry.nickname} — ${entry.score.toLocaleString()}`;
    })
    .join("\n");
}

export async function sendTelegram(message: string): Promise<{ ok: boolean; message_id?: number }> {
  const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

  if (!botToken || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set");
  }

  const res = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    },
  );

  const result = await res.json();
  return { ok: result.ok, message_id: result.result?.message_id };
}
