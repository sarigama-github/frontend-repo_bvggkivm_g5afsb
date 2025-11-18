import React from 'react'
import ArcEditor from './ArcEditor'

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
      {children}
    </span>
  )
}

function StaticGrid({ grid }) {
  const palette = [
    '#1f2937', // 0 black (slate-800)
    '#3b82f6', // 1 blue
    '#ef4444', // 2 red
    '#22c55e', // 3 green
    '#eab308', // 4 yellow
    '#9ca3af', // 5 gray
    '#ec4899', // 6 pink
    '#f97316', // 7 orange
    '#38bdf8', // 8 light blue
    '#7f1d1d', // 9 maroon
  ]
  const rows = grid.length
  const cols = grid[0]?.length || 0
  return (
    <div className="flex items-center justify-center p-2">
      <div
        className="grid rounded-md bg-white p-1 shadow-sm border border-slate-200"
        style={{
          gridTemplateColumns: `repeat(${cols}, 24px)`,
          gridTemplateRows: `repeat(${rows}, 24px)`,
          gap: '3px',
        }}
      >
        {grid.map((row, r) => row.map((val, c) => (
          <div key={`${r}-${c}`} className="w-[24px] h-[24px] rounded-[4px]" style={{ backgroundColor: palette[val] }} />
        )))}
      </div>
    </div>
  )
}

export default function Sections() {
  // Example pairs (static)
  const ex1In = [
    [0,0,1,1,0],
    [0,0,1,1,0],
    [0,0,0,0,0],
    [2,2,0,0,0],
    [2,2,0,0,0],
  ]
  const ex1Out = [
    [0,0,1,1,0],
    [0,0,1,1,0],
    [0,0,1,1,0],
    [2,2,1,1,0],
    [2,2,0,0,0],
  ]
  const ex2In = [
    [0,3,0,3,0],
    [3,0,3,0,3],
    [0,3,0,3,0],
    [3,0,3,0,3],
    [0,3,0,3,0],
  ]
  const ex2Out = [
    [0,3,0,3,0],
    [3,4,3,4,3],
    [0,3,0,3,0],
    [3,4,3,4,3],
    [0,3,0,3,0],
  ]

  // Challenge (editable)
  const chIn = [
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
  ]
  const chOut = [
    [0,0,0,0,0],
    [0,2,2,2,0],
    [0,2,0,2,0],
    [0,2,2,2,0],
    [0,0,0,0,0],
  ]

  return (
    <section className="relative py-24">
      {/* gentle gradient wash */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.05),transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Snapshot cards */}
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

        {/* Timeline stripe */}
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

        {/* Examples + interactive */}
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-6 md:p-8">
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Learn by example
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Static examples (read-only)</h3>
              <p className="text-slate-700 text-sm">Input → Output pairs are grouped inside compact cards so the small grids don’t float in whitespace.</p>
            </div>

            {/* Example pair 1 (grouped card) */}
            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-slate-200 shadow-sm">
              <div className="grid sm:grid-cols-[1fr_24px_1fr] items-center gap-3">
                <div>
                  <p className="mb-2 text-xs font-medium text-slate-600">Example 1 — Input</p>
                  <StaticGrid grid={ex1In} />
                </div>
                <div className="hidden sm:flex items-center justify-center text-slate-400">→</div>
                <div>
                  <p className="mb-2 text-xs font-medium text-slate-600">Example 1 — Output</p>
                  <StaticGrid grid={ex1Out} />
                </div>
              </div>
            </div>

            {/* Example pair 2 (grouped card) */}
            <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-slate-200 shadow-sm">
              <div className="grid sm:grid-cols-[1fr_24px_1fr] items-center gap-3">
                <div>
                  <p className="mb-2 text-xs font-medium text-slate-600">Example 2 — Input</p>
                  <StaticGrid grid={ex2In} />
                </div>
                <div className="hidden sm:flex items-center justify-center text-slate-400">→</div>
                <div>
                  <p className="mb-2 text-xs font-medium text-slate-600">Example 2 — Output</p>
                  <StaticGrid grid={ex2Out} />
                </div>
              </div>
            </div>

            {/* Interactive challenge */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900">Your turn (editable)</h4>
              <p className="text-slate-700 text-sm">Replicate the input, paint, and submit. Controls are consolidated so the editor feels lighter.</p>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="rounded-2xl bg-white/80 backdrop-blur p-3 border border-slate-200 shadow-sm">
                  <p className="mb-2 text-xs font-medium text-slate-600">Challenge — Input (read-only)</p>
                  <StaticGrid grid={chIn} />
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur p-3 border border-slate-200 shadow-sm">
                  <p className="mb-2 text-xs font-medium text-slate-600">Editable grid</p>
                  <ArcEditor rows={chIn.length} cols={chIn[0].length} replicateFrom={chIn} solutionGrid={chOut} />
                </div>
              </div>
            </div>
          </div>
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
