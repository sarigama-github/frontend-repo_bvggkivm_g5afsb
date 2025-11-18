import React from 'react'

export default function Sections() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section 1: How it works */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">1. Receive tasks</h4>
            <p className="mt-2 text-slate-600">Each month ships a curated pack of ARC-style train/test grids focused on a few latent concepts.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">2. Submit solutions</h4>
            <p className="mt-2 text-slate-600">Upload your solver and include a golfed version if you have one. We evaluate for correctness and brevity.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">3. Climb the board</h4>
            <p className="mt-2 text-slate-600">Leaderboard balances accuracy, speed, and character count to reward both reliability and elegance.</p>
          </div>
        </div>

        {/* Section 2: Rules */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
          <h3 className="text-2xl font-bold text-slate-900">Rules at a glance</h3>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700">
            <li>Any language allowed; include a script to reproduce results</li>
            <li>Golfed entry must pass the same tests as the main solver</li>
            <li>No external model calls during evaluation</li>
            <li>We provide a standard IO format for grids</li>
          </ul>
        </div>

        {/* Section 3: Timeline */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8">
          <h3 className="text-2xl font-bold text-slate-900">Timeline</h3>
          <div className="mt-4 grid md:grid-cols-4 gap-4 text-slate-700">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">Now</p>
              <p className="font-medium">Preview tasks + practice</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">Nov 25</p>
              <p className="font-medium">Contest opens</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">Dec 1</p>
              <p className="font-medium">Midway leaderboard</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs uppercase tracking-wide text-slate-500">Dec 10</p>
              <p className="font-medium">Final results</p>
            </div>
          </div>
        </div>

        {/* Section 4: FAQ */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">Is this official?</h4>
            <p className="mt-2 text-slate-600">No — ARC AGI 2.5 is unofficial. It's a community contest inspired by ARC to keep the spirit alive with frequent, open events.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">What does “Golfed” mean?</h4>
            <p className="mt-2 text-slate-600">A golfed solution solves the same task using as few characters as possible. Shorter is better if it still passes the tests.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">Can teams participate?</h4>
            <p className="mt-2 text-slate-600">Yes — solo or team entries are welcome. Please disclose collaborators.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold text-slate-900">How do I start?</h4>
            <p className="mt-2 text-slate-600">Skim the sample problem, read the rules, and hit “Register now.” We’ll email detailed instructions before kickoff.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
