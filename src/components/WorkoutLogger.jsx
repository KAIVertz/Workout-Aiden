import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTodayWorkout } from '../data/workouts'

export default function WorkoutLogger({ todayLog, logSet, removeLastSet, markComplete, isCompleted, checkAndUpdatePR, settings }) {
  const navigate = useNavigate()
  const { type, workout } = getTodayWorkout(settings.startDate)
  const [activeExercise, setActiveExercise] = useState(null)
  const [newPR, setNewPR] = useState(null)

  function handleLogSet(exerciseId, reps, weight) {
    logSet(exerciseId, { reps: Number(reps), weight: Number(weight), time: Date.now() })
    const isPR = checkAndUpdatePR(exerciseId, { reps: Number(reps), weight: Number(weight) })
    if (isPR) {
      setNewPR(exerciseId)
      setTimeout(() => setNewPR(null), 3000)
    }
  }

  function handleComplete() {
    markComplete()
    navigate('/')
  }

  const loggedCount = workout.exercises.filter(
    ex => (todayLog.exercises?.[ex.id] || []).length > 0
  ).length

  return (
    <div className="min-h-screen bg-gray-950 pb-28">
      {/* Header */}
      <div className={`bg-gradient-to-br ${workout.color} px-6 pt-14 pb-8`}>
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
          Let's go —
        </p>
        <h1 className="text-3xl font-black text-white">
          {workout.icon} {workout.label}
        </h1>
        <p className="text-white/70 text-sm mt-1">{workout.subtitle}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 bg-black/20 rounded-full h-2">
            <div
              className="bg-white rounded-full h-2 transition-all"
              style={{ width: `${(loggedCount / workout.exercises.length) * 100}%` }}
            />
          </div>
          <span className="text-white/80 text-sm font-semibold">
            {loggedCount}/{workout.exercises.length}
          </span>
        </div>
      </div>

      {/* PR Toast */}
      {newPR && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-yellow-500 text-black font-black text-sm px-6 py-3 rounded-full shadow-lg animate-bounce">
          🏆 NEW PERSONAL RECORD!
        </div>
      )}

      <div className="px-4 py-4 max-w-md mx-auto space-y-3">
        {workout.exercises.map(exercise => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            sets={todayLog.exercises?.[exercise.id] || []}
            isActive={activeExercise === exercise.id}
            onToggle={() => setActiveExercise(prev => prev === exercise.id ? null : exercise.id)}
            onLogSet={(reps, weight) => handleLogSet(exercise.id, reps, weight)}
            onRemoveLast={() => removeLastSet(exercise.id)}
            accentClass={workout.accent}
          />
        ))}

        {isCompleted ? (
          <div className="rounded-2xl bg-green-900/30 border border-green-700/50 p-5 text-center">
            <p className="text-green-400 text-xl font-bold">✅ Workout complete!</p>
          </div>
        ) : (
          <button
            onClick={handleComplete}
            disabled={loggedCount === 0}
            className={`w-full py-5 rounded-2xl font-black text-xl uppercase tracking-wide transition-all active:scale-95 ${
              loggedCount > 0
                ? `bg-gradient-to-r ${workout.color} text-white shadow-lg`
                : 'bg-gray-800 text-gray-600 cursor-not-allowed'
            }`}
          >
            {loggedCount > 0 ? 'Finish Workout ✓' : 'Log at least one exercise'}
          </button>
        )}
      </div>
    </div>
  )
}

function ExerciseCard({ exercise, sets, isActive, onToggle, onLogSet, onRemoveLast, accentClass }) {
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!reps || !weight) return
    onLogSet(reps, weight)
    setReps('')
    setWeight('')
  }

  const lastSet = sets[sets.length - 1]

  return (
    <div className={`bg-gray-900 rounded-2xl border transition-colors ${isActive ? 'border-gray-600' : 'border-gray-800'}`}>
      {/* Exercise header */}
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-center justify-between"
      >
        <div>
          <p className="text-white font-semibold">{exercise.name}</p>
          <p className="text-gray-500 text-xs mt-0.5">
            {exercise.muscle} · {exercise.sets} sets · {exercise.repsTarget} reps
          </p>
        </div>
        <div className="flex items-center gap-2">
          {sets.length > 0 && (
            <span className={`text-xs font-bold ${accentClass} bg-gray-800 rounded-full px-2 py-0.5`}>
              {sets.length} sets
            </span>
          )}
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform ${isActive ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isActive && (
        <div className="px-4 pb-4 space-y-3">
          {/* Coach tip */}
          <p className="text-gray-500 text-xs italic border-l-2 border-gray-700 pl-2">
            {exercise.tip}
          </p>

          {/* Logged sets */}
          {sets.length > 0 && (
            <div className="space-y-1">
              {sets.map((s, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg px-3 py-2">
                  <span className="text-gray-400 text-xs">Set {i + 1}</span>
                  <span className="text-white text-sm font-semibold">
                    {s.reps} reps @ {s.weight} kg
                  </span>
                </div>
              ))}
              <button
                onClick={onRemoveLast}
                className="text-red-500/70 text-xs hover:text-red-400 transition-colors"
              >
                ✕ Remove last set
              </button>
            </div>
          )}

          {/* Log set form */}
          <form onSubmit={submit} className="flex gap-2">
            <div className="flex-1">
              <label className="text-gray-500 text-xs block mb-1">Reps</label>
              <input
                type="number"
                inputMode="numeric"
                placeholder={lastSet ? String(lastSet.reps) : '10'}
                value={reps}
                onChange={e => setReps(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 text-sm border border-gray-700 focus:border-orange-500 focus:outline-none"
                min="1"
                max="100"
              />
            </div>
            <div className="flex-1">
              <label className="text-gray-500 text-xs block mb-1">Weight (kg)</label>
              <input
                type="number"
                inputMode="decimal"
                placeholder={lastSet ? String(lastSet.weight) : '20'}
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 text-sm border border-gray-700 focus:border-orange-500 focus:outline-none"
                min="0"
                step="0.5"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-lg px-4 py-2 text-sm transition-colors"
              >
                +
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
