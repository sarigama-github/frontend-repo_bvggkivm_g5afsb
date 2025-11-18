import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-white to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_70%_10%,rgba(0,0,0,0.03),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Next contest starts 25th November
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            ARC AGI 2.5
          </h1>

          <p className="mt-3 text-lg md:text-xl text-slate-600 max-w-2xl">
            The community spin on ARC — monthly challenges that push reasoning ability and reward elegant, extremely concise solutions.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition shadow-sm">
              Register now
            </button>
            <a href="#about" className="text-slate-600 hover:text-slate-900 text-sm"><span className="underline decoration-slate-300">Learn more</span></a>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-sm p-5 w-full max-w-3xl">
            <p className="text-slate-700 text-sm leading-relaxed">
              Compete on the Abstraction and Reasoning Challenge with a twist. In addition to solving tasks correctly, earn bonus points for solutions that are <span className="font-mono font-semibold tracking-tight text-slate-900">Golfed</span> — crafted with the minimum characters of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
