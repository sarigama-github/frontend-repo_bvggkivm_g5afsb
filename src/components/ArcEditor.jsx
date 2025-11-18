import React, { useMemo, useState } from 'react'

// Reusable ARC grid editor
// Props: rows, cols (defaults 5x5) and optional onChange callback
export default function ArcEditor({ rows = 5, cols = 5, onChange }) {
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

  // Regenerate if rows/cols change
  React.useEffect(() => {
    setGrid(makeInitial())
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

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6">
      {/* Grid */}
      <div className="relative">
        <div className="inline-grid" style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1.75rem))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1.75rem))`,
          gap: '2px'
        }}>
          {grid.map((row, r) => row.map((val, c) => (
            <button
              key={`${r}-${c}`}
              aria-label={`cell-${r}-${c}`}
              onClick={() => setCell(r, c)}
              className="size-7 rounded-sm border border-slate-300 shadow-sm active:scale-[0.98] transition"
              style={{ backgroundColor: palette[val].color }}
            />
          )))}
        </div>
        {/* Subtle grid overlay for visual polish */}
        <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-black/5" />
      </div>

      {/* Editor */}
      <div className="sm:w-56 p-3 rounded-lg bg-white/70 backdrop-blur border border-slate-200 shadow-sm">
        <div className="mb-2 text-xs font-semibold tracking-wide text-slate-500">Palette</div>
        <div className="grid grid-cols-5 gap-2 mb-3">
          {palette.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`h-7 rounded-md border shadow-sm transition outline-offset-2 ${selected === p.id ? 'ring-2 ring-slate-900' : 'ring-0'} `}
              style={{ backgroundColor: p.color, borderColor: 'rgba(0,0,0,0.08)' }}
              title={`${p.label} (${p.id})`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-2">
          <button onClick={reset} className="px-3 py-1.5 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800">Reset</button>
          <button onClick={copy} className="px-3 py-1.5 text-sm rounded-md bg-white border border-slate-300 hover:bg-slate-50">Copy JSON</button>
        </div>
        <div className="mt-2 text-[11px] text-slate-500">
          Codes: 0=Black,1=Blue,2=Red,3=Green,4=Yellow,5=Gray,6=Pink,7=Orange,8=LtBlue,9=Maroon
        </div>
        {copied && (
          <div className="mt-2 text-xs font-medium text-emerald-600">Copied!</div>
        )}
      </div>
    </div>
  )
}
