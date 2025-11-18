import React, { useMemo, useState, useEffect } from 'react'
import { Copy, RotateCcw, Repeat, Check } from 'lucide-react'

// Reusable ARC grid editor
// Props: rows, cols (defaults 5x5)
// Optional: onChange(grid), replicateFrom (2D array), solutionGrid (2D array) to enable replicate + submit
export default function ArcEditor({ rows = 5, cols = 5, onChange, replicateFrom, solutionGrid }) {
  const palette = useMemo(() => ([
    { id: 0, label: 'Black', color: '#1f2937' }, // slate-800 as light black
    { id: 1, label: 'Blue', color: '#3b82f6' },
    { id: 2, label: 'Red', color: '#ef4444' },
    { id: 3, label: 'Green', color: '#22c55e' },
    { id: 4, label: 'Yellow', color: '#eab308' },
    { id: 5, label: 'Gray', color: '#9ca3af' },
    { id: 6, label: 'Pink', color: '#ec4899' },
    { id: 7, label: 'Orange', color: '#f97316' },
    { id: 8, label: 'Light Blue', color: '#38bdf8' },
    { id: 9, label: 'Maroon', color: '#7f1d1d' },
  ]), [])

  const makeInitial = () => Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))
  const [grid, setGrid] = useState(makeInitial)
  const [selected, setSelected] = useState(1) // default to blue
  const [copied, setCopied] = useState(false)
  const [result, setResult] = useState(null) // null | 'correct' | 'wrong'

  // Regenerate if rows/cols change
  useEffect(() => {
    setGrid(makeInitial())
    setResult(null)
  }, [rows, cols])

  const setCell = (r, c) => {
    setGrid((prev) => {
      const next = prev.map((row) => row.slice())
      next[r][c] = selected
      if (onChange) onChange(next)
      return next
    })
  }

  const reset = () => {
    const next = makeInitial()
    setGrid(next)
    setResult(null)
    if (onChange) onChange(next)
  }

  const replicate = () => {
    if (!replicateFrom) return
    // fit or crop to current size
    const next = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => (replicateFrom[r] && replicateFrom[r][c] != null ? replicateFrom[r][c] : 0))
    )
    setGrid(next)
    setResult(null)
    if (onChange) onChange(next)
  }

  const copy = async () => {
    try {
      const text = JSON.stringify(grid)
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  const submit = () => {
    if (!solutionGrid) return
    const sameSize = solutionGrid.length === rows && solutionGrid[0]?.length === cols
    let ok = sameSize
    if (ok) {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c] !== solutionGrid[r][c]) { ok = false; break }
        }
        if (!ok) break
      }
    }
    setResult(ok ? 'correct' : 'wrong')
  }

  return (
    <div className="w-full grid grid-cols-1 gap-3">
      {/* Grid */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="mb-2 text-[11px] text-slate-600">Paint the output grid</div>
        <div
          className="grid rounded-md bg-white p-1 shadow-sm border border-slate-200"
          style={{
            gridTemplateColumns: `repeat(${cols}, 28px)`,
            gridTemplateRows: `repeat(${rows}, 28px)`,
            gap: '2px',
          }}
        >
          {grid.map((row, r) => row.map((val, c) => (
            <button
              key={`${r}-${c}`}
              aria-label={`cell-${r}-${c}`}
              onClick={() => setCell(r, c)}
              className="w-[28px] h-[28px] rounded-[4px] active:scale-[0.98] transition"
              style={{ backgroundColor: palette[val].color }}
            />
          )))}
        </div>
      </div>

      {/* Controls under grid (denser) */}
      <div className="w-full p-3 rounded-md bg-white/80 backdrop-blur border border-slate-200 shadow-sm">
        <div className="mb-1 text-xs font-semibold tracking-wide text-slate-500">Palette</div>
        <div className="grid grid-cols-5 gap-1.5 mb-2">
          {palette.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`group relative h-7 rounded-md border shadow-sm transition outline-offset-2 ${selected === p.id ? 'ring-2 ring-slate-900' : 'ring-0'} `}
              style={{ backgroundColor: p.color, borderColor: 'rgba(0,0,0,0.08)' }}
              title={`${p.label} (${p.id})`}
            >
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-mono text-white/0 group-hover:text-white/90 transition">
                {p.id}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {solutionGrid && (
            <button onClick={submit} className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-500">
              <Check className="h-4 w-4" /> Submit
            </button>
          )}
          <div className="flex items-center gap-2">
            <button onClick={reset} className="h-8 px-2 inline-flex items-center gap-1 justify-center rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-sm">
              <RotateCcw className="h-4 w-4 text-slate-700" /> Reset
            </button>
            <button onClick={copy} className="h-8 px-2 inline-flex items-center gap-1 justify-center rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-sm">
              <Copy className="h-4 w-4 text-slate-700" /> Copy JSON
            </button>
            {replicateFrom && (
              <button onClick={replicate} className="h-8 px-2 inline-flex items-center gap-1 justify-center rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-sm">
                <Repeat className="h-4 w-4 text-slate-700" /> Replicate input
              </button>
            )}
          </div>
        </div>

        <div className="mt-2 text-[11px] text-slate-500">Try solving a problem in the next 1 minute — speed matters!</div>

        {copied && (
          <div className="mt-1 text-xs font-medium text-emerald-600">Copied!</div>
        )}
        {result === 'correct' && (
          <div className="mt-1 text-xs font-medium text-emerald-700">Great! That matches the expected output.</div>
        )}
        {result === 'wrong' && (
          <div className="mt-1 text-xs font-medium text-rose-600">Not quite — try again or replicate the input to start over.</div>
        )}
      </div>
    </div>
  )
}
