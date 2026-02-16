import { createClient, type SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2";

export function getSupabaseClient(): SupabaseClient {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

export function assertAuth(req: Request): void {
  if (!req.headers.get("Authorization")) {
    throw new Error("Unauthorized");
  }
}

export function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
