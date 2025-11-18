import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import SampleProblem from './components/SampleProblem'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight">ARC AGI 2.5</span>
            <span className="font-serif italic text-slate-500">/ <span className="font-mono font-semibold">Golfed</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#sample" className="hover:text-slate-900">Sample</a>
            <a href="#more" className="hover:text-slate-900">Details</a>
            <button className="rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Register</button>
          </nav>
        </div>
      </header>

      {/* Cover */}
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="sample"><SampleProblem /></div>
        <div id="more"><Sections /></div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ARC AGI 2.5 — community contest</p>
          <p>Unofficial. Not affiliated with the original ARC competition.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
