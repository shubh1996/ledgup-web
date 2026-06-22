"use client";

import { useState } from "react";

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (res.status === 409 || data.error === "already_on_list") {
        setStatus("duplicate");
      } else if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-brand-teal/10 border border-brand-teal/30 p-6 text-center">
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-brand-teal font-semibold text-lg mb-1">You&apos;re on the list!</p>
        <p className="text-brand-subtle text-sm">Check your inbox — we&apos;ve sent you a confirmation. See you at launch.</p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div className="rounded-2xl bg-brand-gold/10 border border-brand-gold/30 p-6 text-center">
        <div className="text-3xl mb-3">✨</div>
        <p className="text-brand-gold font-semibold text-lg mb-1">Already on the list!</p>
        <p className="text-brand-subtle text-sm">Your spot is already saved. We&apos;ll reach out when we launch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex flex-col gap-3 ${compact ? "" : "sm:flex-row sm:gap-3"}`}>
        {!compact && (
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl bg-brand-card border border-white/10 px-4 py-3.5 text-white placeholder-brand-muted text-sm outline-none focus:border-brand-gold/50 transition-colors"
          />
        )}
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 rounded-xl bg-brand-card border border-white/10 px-4 py-3.5 text-white placeholder-brand-muted text-sm outline-none focus:border-brand-gold/50 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-brand-gold px-6 py-3.5 text-brand-bg font-semibold text-sm whitespace-nowrap hover:bg-brand-gold/90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist →"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-brand-red text-xs">Something went wrong. Please try again.</p>
      )}
      <p className="mt-3 text-brand-muted text-xs text-center">
        Free forever during the waitlist period · No spam, ever
      </p>
    </form>
  );
}
