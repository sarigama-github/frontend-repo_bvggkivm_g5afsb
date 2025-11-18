import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">What is ARC AGI 2.5?</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              ARC AGI 2.5 is an unofficial, community-driven continuation of the original ARC competition — rebuilt for iterative learning and fast feedback. Every month, we publish a fresh set of tasks that challenge systematic generalization and visual reasoning across small grids.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The twist: submissions are also ranked by <span className="font-mono font-semibold tracking-tight text-slate-900">code golf</span>. Solve the problem correctly, then see how short you can make it without sacrificing clarity. 
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900"/> Monthly contests with evolving task sets</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900"/> Public leaderboards and solution gallery</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900"/> Bonus points for minimal character-count solutions</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900"/> Language-agnostic — use Python, JS, Julia, or anything else</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
