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

  const productImage =
    plan === "30"
      ? "/images/17-pricing-monthly-packaging.jpeg"
      : "/images/17-pricing-starter-packaging.jpeg";
  const productAlt =
    plan === "30" ? "Zesty 30-day supply" : "Zesty 14-day starter";

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
          You&rsquo;re on the list!
        </h2>
        <p className="text-text/60 max-w-sm mx-auto">
          I&rsquo;ll let you know as soon as Zesty is available.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center animate-[fadeInUp_0.4s_ease-out]">
      <div className="mx-auto mb-8 w-full max-w-sm aspect-video rounded-2xl overflow-hidden bg-sand">
        <img
          src={productImage}
          alt={productAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-text mb-5 leading-snug">
        Good news, you have taste.
      </h1>
      <div className="text-text/60 mb-8 max-w-sm mx-auto leading-relaxed space-y-3">
        <p>You clicked order. That makes my day.</p>
        <p>
          I&rsquo;m working on launching Zesty and you&rsquo;re here early.
          Leave your email and I&rsquo;ll send you a note the moment you can
          order.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-sm mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-5 py-3.5 rounded-full border border-text/15 bg-bg text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-brand/50 text-center transition-shadow"
        />
        <button
          type="submit"
          className="w-full bg-brand hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 text-text font-semibold py-3.5 rounded-full transition-all cursor-pointer"
        >
          Put me on the list
        </button>
      </form>

      <p className="text-xs text-text/40 mt-4">
        No spam. Just a note when you can order.
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
      <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,169,34,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <div className="w-full max-w-md relative">
          <p className="text-2xl font-bold text-brand text-center mb-8">
            zesty
          </p>
          <Suspense
            fallback={
              <div className="text-center text-text/40">Loading...</div>
            }
          >
            <WaitlistForm />
          </Suspense>
        </div>
      </main>
    </>
  );
}
