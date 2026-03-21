import { getAllExercises, WORKOUTS } from '../data/workouts'

const TYPE_COLORS = {
  Push: 'text-orange-400',
  Pull: 'text-blue-400',
  Legs: 'text-green-400',
}

export default function PRTracker({ prs }) {
  const allExercises = getAllExercises()
  const prExercises = allExercises.filter(ex => prs[ex.id])
  const noDataExercises = allExercises.filter(ex => !prs[ex.id])

  return (
    <div className="min-h-screen bg-gray-950 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-500 to-orange-600 px-6 pt-14 pb-8">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
          Personal Records
        </p>
        <h1 className="text-3xl font-black text-white">🏆 Your PRs</h1>
        <p className="text-white/70 text-sm mt-1">
          {prExercises.length} / {allExercises.length} exercises logged
        </p>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto space-y-6">
        {prExercises.length === 0 ? (
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
            <p className="text-4xl mb-3">🎯</p>
            <p className="text-white font-semibold">No PRs yet.</p>
            <p className="text-gray-500 text-sm mt-1">
              Log your first workout to set your baseline.
            </p>
          </div>
        ) : (
          <>
            {['Push', 'Pull', 'Legs'].map(workoutType => {
              const typeExercises = prExercises.filter(ex => ex.workoutType === workoutType)
              if (!typeExercises.length) return null
              return (
                <section key={workoutType}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${TYPE_COLORS[workoutType]}`}>
                    {WORKOUTS[workoutType].icon} {WORKOUTS[workoutType].label}
                  </p>
                  <div className="space-y-2">
                    {typeExercises.map(ex => {
                      const pr = prs[ex.id]
                      return (
                        <div key={ex.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800 flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold text-sm">{ex.name}</p>
                            <p className="text-gray-500 text-xs mt-0.5">{formatDate(pr.date)}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-black text-lg">{pr.weight} kg</p>
                            <p className="text-gray-500 text-xs">{pr.reps} reps</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </>
        )}

        {/* Exercises without PRs yet */}
        {noDataExercises.length > 0 && (
          <section>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
              Not yet logged
            </p>
            <div className="space-y-1">
              {noDataExercises.map(ex => (
                <div key={ex.id} className="bg-gray-900/50 rounded-xl px-4 py-3 border border-gray-800/50 flex items-center justify-between opacity-50">
                  <p className="text-gray-400 text-sm">{ex.name}</p>
                  <p className="text-gray-600 text-xs">— no data</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
