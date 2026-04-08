"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";

function WaitlistForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "14";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    posthog.identify(email, { email, plan });
    posthog.capture("waitlist_signup", { email, plan });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h2 className="text-2xl font-bold text-text mb-3">you&rsquo;re on the list.</h2>
        <p className="text-text/60">we&rsquo;ll email you as soon as zesty is ready to ship.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-4">
        we&rsquo;re not ready yet.
      </h1>
      <p className="text-text/60 mb-8 max-w-sm mx-auto">
        zesty is still in development. leave your email and we&rsquo;ll let you know as soon as you can order.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          className="w-full px-5 py-3.5 rounded-full border border-text/15 bg-bg text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-brand/50 text-center"
        />
        <button
          type="submit"
          className="w-full bg-brand hover:bg-brand-hover text-text font-semibold py-3.5 rounded-full transition-colors cursor-pointer"
        >
          keep me posted
        </button>
      </form>

      <p className="text-xs text-text/40 mt-4">no spam. just one email when we launch.</p>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Wordmark */}
        <p className="text-3xl font-bold text-brand text-center mb-10">zesty</p>

        <Suspense fallback={<div className="text-center text-text/40">Loading...</div>}>
          <WaitlistForm />
        </Suspense>
      </div>
    </main>
  );
}
