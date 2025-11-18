import React from 'react'

export default function SampleProblem() {
  return (
    <section className="relative py-24">
      {/* subtle background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: explanation */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 text-slate-600 border border-slate-200 px-3 py-1 text-xs">
              Sample problem
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Mirror the colored block across the main diagonal</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Given a 5×5 grid with a colored polyomino, reflect the shape across the top‑left → bottom‑right diagonal. Preserve colors; empty cells remain empty.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm p-4">
              <p className="text-sm text-slate-700">
                Golf tip: Start with a correct solution, then compress. Inline helpers, leverage array slicing, and prefer expressions over statements.
              </p>
            </div>
          </div>

          {/* Right: custom ARC‑style visual */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="h-10 w-10 rounded-md bg-slate-50 border border-slate-200" />
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none">
                {/* example colored cells (pre) */}
                <div className="absolute left-[12%] top-[24%] h-10 w-10 rounded-md bg-emerald-500 shadow ring-1 ring-emerald-600/30" />
                <div className="absolute left-[12%] top-[24%] translate-x-[44px] h-10 w-10 rounded-md bg-emerald-500 shadow ring-1 ring-emerald-600/30" />
                <div className="absolute left-[12%] top-[24%] translate-y-[44px] h-10 w-10 rounded-md bg-emerald-500 shadow ring-1 ring-emerald-600/30" />

                {/* mirrored (post) */}
                <div className="absolute right-[12%] bottom-[24%] h-10 w-10 rounded-md bg-blue-500 shadow ring-1 ring-blue-600/30" />
                <div className="absolute right-[12%] bottom-[24%] -translate-x-[44px] h-10 w-10 rounded-md bg-blue-500 shadow ring-1 ring-blue-600/30" />
                <div className="absolute right-[12%] bottom-[24%] -translate-y-[44px] h-10 w-10 rounded-md bg-blue-500 shadow ring-1 ring-blue-600/30" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>Before</span>
                <span>After (diagonal mirror)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
