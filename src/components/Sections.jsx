import React from 'react'

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
      {children}
    </span>
  )
}

export default function Sections() {
  return (
    <section className="relative py-24">
      {/* gentle gradient wash */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.05),transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Snapshot cards: punchier + less text */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Receive tasks',
              body: 'Curated ARC-style grids that probe compositional patterns.',
            },
            {
              title: 'Submit + Golf',
              body: 'Correctness first. Then compete on character count.',
            },
            {
              title: 'Climb the board',
              body: 'Balanced scoring for accuracy, speed, and brevity.',
            },
          ].map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-900/5 blur-2xl" />
              <h4 className="font-semibold text-slate-900">{c.title}</h4>
              <p className="mt-2 text-slate-600">{c.body}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                <Chip>ARC</Chip>
                <span className="mx-2 text-slate-300">•</span>
                <Chip>Golfed</Chip>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline stripe: simplified visual rhythm */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3 overflow-x-auto">
            {[
              { k: 'Now', v: 'Practice tasks' },
              { k: 'Nov 25', v: 'Contest opens' },
              { k: 'Dec 1', v: 'Midway board' },
              { k: 'Dec 10', v: 'Final results' },
            ].map((t, i) => (
              <div key={t.k} className="relative flex-1 min-w-[160px]">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{t.k}</p>
                  <p className="font-medium text-slate-900">{t.v}</p>
                </div>
                {i < 3 && (
                  <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 h-px w-6 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compact FAQ: fewer, sharper Qs */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: 'Is this official?',
              a: "No — it's a community contest inspired by ARC.",
            },
            {
              q: 'What is “Golfed”?',
              a: 'Solve correctly; then minimize characters while passing tests.',
            },
            {
              q: 'Teams allowed?',
              a: 'Yes — solo or team entries welcome. Disclose collaborators.',
            },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">{f.q}</h4>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA stripe */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-900 font-semibold">Ready to join the next round?</p>
            <p className="text-sm text-slate-600">Kickoff on Nov 25. Short, elegant solutions encouraged.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition shadow-sm">
            Register now
          </a>
        </div>
      </div>
    </section>
  )
}
