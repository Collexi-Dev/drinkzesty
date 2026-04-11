"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { trackMetaEvent } from "../../meta-pixel";

function WaitlistForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "14";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    posthog.identify(email, { email, plan });
    posthog.capture("waitlist_signup", { email, plan });
    trackMetaEvent("Lead", {
      content_name: "waitlist_signup",
      content_category: plan,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center animate-[fadeInUp_0.4s_ease-out]">
        <div className="text-5xl mb-5 animate-[scaleIn_0.35s_ease-out]">
          💛
        </div>
        <h2 className="text-2xl font-bold text-text mb-3">
          you&rsquo;re on the list!
        </h2>
        <p className="text-text/60 max-w-sm mx-auto">
          thank you. i&rsquo;ll keep you posted as things progress.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center animate-[fadeInUp_0.4s_ease-out]">
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-6 leading-snug">
        genuinely, thank you for clicking order.
        <br />
        <span className="text-text/50">
          but zesty doesn&rsquo;t exist <em>yet</em>.
        </span>
      </h1>
      <div className="text-text/60 mb-6 max-w-md mx-auto leading-relaxed text-left space-y-4">
        <p>
          i&rsquo;m building zesty, but i&rsquo;m still in the exploration
          phase. i want to find out if the interest i think is out there
          actually exists.
        </p>
        <p>
          i believe this can help a lot of people. but i want to see that
          interest is real before i go build it. so thank you, truly, for showing
          your interest.
        </p>
      </div>
      <p className="text-sm font-medium text-text/80 mb-6">
        leave your email and i&rsquo;ll keep you posted on my progress.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-sm mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
          className="w-full px-5 py-3.5 rounded-full border border-text/15 bg-bg text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-brand/50 text-center transition-shadow"
        />
        <button
          type="submit"
          className="w-full bg-brand hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 text-text font-semibold py-3.5 rounded-full transition-all cursor-pointer"
        >
          keep me posted
        </button>
      </form>

      <p className="text-xs text-text/40 mt-4">
        no spam. only updates when there&rsquo;s something to share.
      </p>
    </div>
  );
}

export default function WaitlistPage() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,169,34,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <div className="w-full max-w-md relative">
          <p className="text-3xl font-bold text-brand text-center mb-10">
            zesty
          </p>
          <Suspense
            fallback={
              <div className="text-center text-text/40">loading...</div>
            }
          >
            <WaitlistForm />
          </Suspense>
        </div>
      </main>
    </>
  );
}
