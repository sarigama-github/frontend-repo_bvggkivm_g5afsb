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
    <div className="flex items-center justify-center p-1">
      <div
        className="grid rounded-md bg-white p-1 shadow-sm border border-slate-200"
        style={{
          gridTemplateColumns: `repeat(${cols}, 24px)`,
          gridTemplateRows: `repeat(${rows}, 24px)`,
          gap: '2px',
        }}
      >
        {grid.map((row, r) => row.map((val, c) => (
          <div key={`${r}-${c}`} className="w-[24px] h-[24px] rounded-[3px]" style={{ backgroundColor: palette[val] }} />
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
    <section className="relative py-12">
      {/* subtle backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.04),transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Snapshot cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Receive tasks',
              body: 'ARC-style grids that probe compositional patterns.',
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
            <div key={c.title} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">{c.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Examples + interactive */}
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Learn by example
              </div>
            </div>

            {/* Header bar for beginners */}
            <div className="hidden sm:grid grid-cols-[1fr_40px_1fr] text-[11px] font-medium text-slate-600">
              <div className="pl-1">Input</div>
              <div className="text-center">→</div>
              <div className="pl-1">Output</div>
            </div>

            {/* Example cards in tight grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Example 1 */}
              <div className="rounded-xl bg-white/90 backdrop-blur p-3 border border-slate-200 shadow-sm">
                <div className="grid grid-cols-[1fr_28px_1fr] items-center gap-2">
                  <StaticGrid grid={ex1In} />
                  <div className="flex items-center justify-center text-slate-400">→</div>
                  <StaticGrid grid={ex1Out} />
                </div>
              </div>
              {/* Example 2 */}
              <div className="rounded-xl bg-white/90 backdrop-blur p-3 border border-slate-200 shadow-sm">
                <div className="grid grid-cols-[1fr_28px_1fr] items-center gap-2">
                  <StaticGrid grid={ex2In} />
                  <div className="flex items-center justify-center text-slate-400">→</div>
                  <StaticGrid grid={ex2Out} />
                </div>
              </div>
            </div>

            {/* Interactive challenge (denser, side-by-side) */}
            <div className="grid md:grid-cols-[auto_1fr] gap-4 items-start">
              <div className="rounded-xl bg-white/90 backdrop-blur p-2 border border-slate-200 shadow-sm">
                <p className="mb-2 text-[11px] font-medium text-slate-600">Challenge — Input</p>
                <StaticGrid grid={chIn} />
              </div>
              <div className="rounded-xl bg-white/90 backdrop-blur p-2 border border-slate-200 shadow-sm">
                <p className="mb-2 text-[11px] font-medium text-slate-600">Editable grid</p>
                <ArcEditor rows={chIn.length} cols={chIn[0].length} replicateFrom={chIn} solutionGrid={chOut} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA stripe */}
        <div className="rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-slate-900 font-semibold">Ready to join the next round?</p>
            <p className="text-sm text-slate-600">Kickoff on Nov 25. Short, elegant solutions encouraged.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition shadow-sm">
            Register now
          </a>
        </div>
      </div>
    </section>
  )
}
