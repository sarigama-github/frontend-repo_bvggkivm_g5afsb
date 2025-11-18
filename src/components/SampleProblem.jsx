import React from 'react'

export default function SampleProblem() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: explanation */}
          <div>
            <p className="text-sm uppercase tracking-wider text-slate-500 font-medium">Sample problem</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Mirror the colored block across the main diagonal</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Given a 5x5 grid with a single colored polyomino, transform the grid by reflecting the shape across the top-left to bottom-right diagonal. Cells not occupied remain empty. Multiple colors may appear; preserve them.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm p-4">
              <p className="text-sm text-slate-700">
                Golf tip: Start with a correct solution, then compress. Inline helpers, leverage array slicing, and prefer expressions over statements.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
              <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop" alt="Grid reasoning" className="rounded-lg object-cover w-full h-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
