import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* soft pattern background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,23,42,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(15,23,42,0.05),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 text-slate-600 border border-slate-200 px-3 py-1 text-xs">
              What & why
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              ARC AGI 2.5 — community challenges with a <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500">Golfed</span> twist
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A monthly, community‑run continuation of ARC. Tackle compact grid‑reasoning tasks that probe generalization. Then, compete for style points: solve correctly and compress your code to the fewest characters without breaking clarity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'Language‑agnostic',
                'Public leaderboard',
                'Fresh tasks monthly',
                'Short + elegant solutions',
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-3 py-1 text-sm text-slate-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-900"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Format</p>
              <p className="mt-2 text-slate-900 font-semibold">ARC‑style train/test grids</p>
              <p className="mt-1 text-slate-600 text-sm">Deterministic evaluation, reproducible IO.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Scoring</p>
              <p className="mt-2 text-slate-900 font-semibold">Accuracy + Golf bonus</p>
              <p className="mt-1 text-slate-600 text-sm">Shorter character counts rank higher.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
              <p className="text-xs uppercase tracking-wide text-slate-500">Why join?</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"/> Train compositional reasoning on small, legible tasks</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"/> Learn by browsing others' concise solutions</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"/> Friendly competition and rapid cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
