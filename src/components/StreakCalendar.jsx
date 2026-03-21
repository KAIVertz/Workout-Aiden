import { useMemo } from 'react'
import { useStreak } from '../hooks/useStreak'

export default function StreakCalendar({ completedDates }) {
  const { current, longest } = useStreak(completedDates)
  const completedSet = useMemo(() => new Set(completedDates), [completedDates])

  // Build 16 weeks of days (most recent first = rightmost)
  const weeks = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const days = []
    // Go back 111 days (16 weeks - 1) to get full weeks
    const start = new Date(today)
    start.setDate(today.getDate() - 111)
    // Align to Monday
    while (start.getDay() !== 1) start.setDate(start.getDate() - 1)

    let cursor = new Date(start)
    while (cursor <= today) {
      days.push(new Date(cursor))
      cursor.setDate(cursor.getDate() + 1)
    }

    // Group into weeks
    const result = []
    for (let i = 0; i < days.length; i += 7) {
      result.push(days.slice(i, i + 7))
    }
    return result
  }, [])

  const todayStr = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-gray-950 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 px-6 pt-14 pb-8">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
          Your progress
        </p>
        <h1 className="text-3xl font-black text-white">Streak History</h1>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <StatBig label="Current" value={current} unit="days" icon="🔥" />
          <StatBig label="Longest" value={longest} unit="days" icon="🏆" />
          <StatBig label="Total" value={completedDates.length} unit="workouts" icon="💪" />
        </div>

        {/* Heatmap */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Last 16 weeks
          </p>
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map(day => {
                    const key = day.toISOString().split('T')[0]
                    const done = completedSet.has(key)
                    const isToday = key === todayStr
                    const isFuture = day > new Date()
                    return (
                      <div
                        key={key}
                        title={key}
                        className={`w-4 h-4 rounded-sm transition-colors ${
                          isFuture
                            ? 'bg-gray-800 opacity-30'
                            : done
                            ? 'bg-orange-500'
                            : 'bg-gray-800'
                        } ${isToday ? 'ring-1 ring-white ring-offset-1 ring-offset-gray-900' : ''}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-3 h-3 rounded-sm bg-gray-800" />
            <span className="text-gray-600 text-xs">Missed</span>
            <div className="w-3 h-3 rounded-sm bg-orange-500 ml-2" />
            <span className="text-gray-600 text-xs">Done</span>
          </div>
        </div>

        {/* Recent history */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Recent workouts
          </p>
          {completedDates.length === 0 ? (
            <p className="text-gray-600 text-sm">No workouts yet. Start today.</p>
          ) : (
            <div className="space-y-2">
              {[...completedDates].reverse().slice(0, 10).map(date => (
                <div key={date} className="flex items-center justify-between">
                  <span className="text-white text-sm">{formatDate(date)}</span>
                  <span className="text-orange-400 text-xs font-semibold">✓ Done</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatBig({ label, value, unit, icon }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 text-center">
      <div className="text-xl mb-1">{icon}</div>
      <div className="text-white font-black text-2xl leading-none">{value}</div>
      <div className="text-gray-600 text-xs mt-1">{unit}</div>
      <div className="text-gray-500 text-xs">{label}</div>
    </div>
  )
}

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}
