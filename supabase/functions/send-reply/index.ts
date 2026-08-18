import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { sendTemplateEmail } from "../_shared/transactional-email-templates/send-email.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    if (!user) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: roleRow } = await supabase
      .from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
    if (!roleRow) {
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { to, subject, body, sourceTable, sourceId } = await req.json();
    if (!to || !subject || !body) {
      return new Response(JSON.stringify({ error: "Missing to, subject or body" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sendResult = await sendTemplateEmail("admin-reply", String(to), {
      templateData: { subject: String(subject), body: String(body) },
      idempotencyKey: `admin-reply-${sourceTable ?? "unknown"}-${sourceId ?? crypto.randomUUID()}-${Date.now()}`,
      replyTo: "info@prca.world",
    });
    if (!sendResult.sent) {
      return new Response(
        JSON.stringify({ error: "This recipient has unsubscribed or previously bounced, so the email was not sent." }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    await supabase.from("enquiry_replies").insert({
      source_table: sourceTable ?? "unknown",
      source_id: sourceId ?? null,
      to_email: to,
      subject,
      body,
      sent_by: user.id,
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
