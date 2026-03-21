import { useNavigate } from 'react-router-dom'
import { getTodayWorkout } from '../data/workouts'
import { getDailyMessage, getStreakMessage } from '../data/motivation'
import { useStreak } from '../hooks/useStreak'

export default function Dashboard({ completedDates, isCompleted, settings }) {
  const navigate = useNavigate()
  const { type, workout } = getTodayWorkout(settings.startDate)
  const { current, longest } = useStreak(completedDates)
  const isRest = type === 'Rest'
  const coachMsg = getDailyMessage(isRest)

  return (
    <div className="min-h-screen bg-gray-950 pb-24">
      {/* Header */}
      <div className={`bg-gradient-to-br ${workout.color} px-6 pt-14 pb-10`}>
        <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-1">
          Today
        </p>
        <h1 className="text-4xl font-black text-white mb-1">
          {workout.icon} {workout.label}
        </h1>
        <p className="text-white/80 text-base">{workout.subtitle}</p>

        {/* Streak badge */}
        <div className="mt-6 inline-flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
          <span className="text-2xl">🔥</span>
          <span className="text-white font-bold text-lg">{current} day streak</span>
        </div>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto space-y-4">
        {/* Coach message */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Coach says
          </p>
          <p className="text-white text-lg font-semibold leading-snug">"{coachMsg}"</p>
        </div>

        {/* Streak message */}
        <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800">
          <p className="text-orange-400 font-semibold text-sm">
            {getStreakMessage(current)}
          </p>
          {longest > current && (
            <p className="text-gray-500 text-xs mt-1">
              Longest streak: {longest} days — beat it.
            </p>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Current Streak" value={`${current}d`} icon="🔥" />
          <StatCard label="Best Streak" value={`${longest}d`} icon="🏆" />
        </div>

        {/* Today's exercises preview */}
        {!isRest && (
          <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Today's exercises
            </p>
            <div className="space-y-2">
              {workout.exercises.slice(0, 5).map(ex => (
                <div key={ex.id} className="flex items-center justify-between">
                  <span className="text-white text-sm">{ex.name}</span>
                  <span className="text-gray-500 text-xs">
                    {ex.sets} × {ex.repsTarget}
                  </span>
                </div>
              ))}
              {workout.exercises.length > 5 && (
                <p className="text-gray-600 text-xs">
                  +{workout.exercises.length - 5} more...
                </p>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {isCompleted ? (
          <div className="rounded-2xl bg-green-900/30 border border-green-700/50 p-5 text-center">
            <p className="text-green-400 text-xl font-bold">✅ Done for today.</p>
            <p className="text-green-500/70 text-sm mt-1">
              Rest up. Come back stronger tomorrow.
            </p>
          </div>
        ) : (
          <button
            onClick={() => navigate('/workout')}
            className={`w-full py-5 rounded-2xl bg-gradient-to-r ${workout.color} text-white font-black text-xl uppercase tracking-wide shadow-lg active:scale-95 transition-transform`}
          >
            {isRest ? 'Log Recovery' : 'Start Workout →'}
          </button>
        )}
      </div>
    </div>
  )
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 border border-gray-800 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-white font-black text-2xl">{value}</div>
      <div className="text-gray-500 text-xs mt-0.5">{label}</div>
    </div>
  )
}
