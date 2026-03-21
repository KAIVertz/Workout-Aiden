// PPL Split — 6-day cycle, day 7 = active recovery
// Equipment: dumbbells + resistance bands

export const WORKOUT_TYPES = ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs', 'Rest']

export const WORKOUTS = {
  Push: {
    label: 'Push Day',
    subtitle: 'Chest · Shoulders · Triceps',
    color: 'from-orange-500 to-red-600',
    accent: 'text-orange-400',
    icon: '🔥',
    exercises: [
      {
        id: 'dumbbell_press',
        name: 'Dumbbell Bench Press',
        sets: 4,
        repsTarget: '8-12',
        muscle: 'Chest',
        tip: 'Control the negative. 2 seconds down.',
      },
      {
        id: 'incline_dumbbell_press',
        name: 'Incline Dumbbell Press',
        sets: 3,
        repsTarget: '10-12',
        muscle: 'Upper Chest',
        tip: 'Keep elbows at 45°, not flared out.',
      },
      {
        id: 'dumbbell_fly',
        name: 'Dumbbell Fly',
        sets: 3,
        repsTarget: '12-15',
        muscle: 'Chest',
        tip: 'Slight bend in elbows, squeeze at the top.',
      },
      {
        id: 'lateral_raise',
        name: 'Lateral Raise',
        sets: 4,
        repsTarget: '12-15',
        muscle: 'Side Delts',
        tip: 'Lead with your elbows, not your hands.',
      },
      {
        id: 'overhead_press',
        name: 'Dumbbell Overhead Press',
        sets: 3,
        repsTarget: '8-10',
        muscle: 'Front Delts',
        tip: 'Press straight up, core tight.',
      },
      {
        id: 'tricep_extension',
        name: 'Overhead Tricep Extension',
        sets: 3,
        repsTarget: '12-15',
        muscle: 'Triceps',
        tip: 'Keep elbows pointing forward.',
      },
      {
        id: 'band_tricep_pushdown',
        name: 'Band Tricep Pushdown',
        sets: 3,
        repsTarget: '15-20',
        muscle: 'Triceps',
        tip: 'Squeeze at full extension. Don\'t rush.',
      },
    ],
  },

  Pull: {
    label: 'Pull Day',
    subtitle: 'Back · Biceps',
    color: 'from-blue-500 to-indigo-600',
    accent: 'text-blue-400',
    icon: '⚡',
    exercises: [
      {
        id: 'dumbbell_row',
        name: 'Single-Arm Dumbbell Row',
        sets: 4,
        repsTarget: '8-12',
        muscle: 'Back',
        tip: 'Pull to your hip, not your shoulder.',
      },
      {
        id: 'band_pull_apart',
        name: 'Band Pull-Apart',
        sets: 3,
        repsTarget: '15-20',
        muscle: 'Rear Delts',
        tip: 'Squeeze shoulder blades together at peak.',
      },
      {
        id: 'renegade_row',
        name: 'Renegade Row',
        sets: 3,
        repsTarget: '8-10 each',
        muscle: 'Back / Core',
        tip: 'Keep hips square. No rotation.',
      },
      {
        id: 'dumbbell_pullover',
        name: 'Dumbbell Pullover',
        sets: 3,
        repsTarget: '12-15',
        muscle: 'Lats',
        tip: 'Keep a slight bend in elbows throughout.',
      },
      {
        id: 'band_face_pull',
        name: 'Band Face Pull',
        sets: 3,
        repsTarget: '15-20',
        muscle: 'Rear Delts / Traps',
        tip: 'Pull to face level. Thumbs behind ears.',
      },
      {
        id: 'dumbbell_curl',
        name: 'Dumbbell Bicep Curl',
        sets: 4,
        repsTarget: '10-12',
        muscle: 'Biceps',
        tip: 'Full range of motion. No swinging.',
      },
      {
        id: 'hammer_curl',
        name: 'Hammer Curl',
        sets: 3,
        repsTarget: '10-12',
        muscle: 'Biceps / Brachialis',
        tip: 'Neutral grip. Slow and controlled.',
      },
    ],
  },

  Legs: {
    label: 'Leg Day',
    subtitle: 'Quads · Hamstrings · Glutes · Calves',
    color: 'from-green-500 to-emerald-600',
    accent: 'text-green-400',
    icon: '🦵',
    exercises: [
      {
        id: 'goblet_squat',
        name: 'Goblet Squat',
        sets: 4,
        repsTarget: '10-12',
        muscle: 'Quads / Glutes',
        tip: 'Chest up, knees track over toes.',
      },
      {
        id: 'dumbbell_rdl',
        name: 'Dumbbell Romanian Deadlift',
        sets: 4,
        repsTarget: '10-12',
        muscle: 'Hamstrings / Glutes',
        tip: 'Push hips back, slight bend in knees.',
      },
      {
        id: 'dumbbell_lunge',
        name: 'Dumbbell Reverse Lunge',
        sets: 3,
        repsTarget: '10-12 each',
        muscle: 'Quads / Glutes',
        tip: 'Step back, front knee stays over ankle.',
      },
      {
        id: 'sumo_squat',
        name: 'Sumo Squat',
        sets: 3,
        repsTarget: '12-15',
        muscle: 'Inner Quads / Glutes',
        tip: 'Wide stance, toes out 45°.',
      },
      {
        id: 'band_hip_thrust',
        name: 'Band Hip Thrust',
        sets: 4,
        repsTarget: '15-20',
        muscle: 'Glutes',
        tip: 'Squeeze at the top for 1 second.',
      },
      {
        id: 'dumbbell_step_up',
        name: 'Dumbbell Step-Up',
        sets: 3,
        repsTarget: '10-12 each',
        muscle: 'Quads / Glutes',
        tip: 'Drive through your heel to step up.',
      },
      {
        id: 'standing_calf_raise',
        name: 'Standing Calf Raise',
        sets: 4,
        repsTarget: '15-20',
        muscle: 'Calves',
        tip: 'Full stretch at bottom, pause at top.',
      },
    ],
  },

  Rest: {
    label: 'Recovery Day',
    subtitle: 'Mobility · Rest · Grow',
    color: 'from-purple-500 to-violet-600',
    accent: 'text-purple-400',
    icon: '🧘',
    exercises: [
      {
        id: 'foam_roll',
        name: 'Foam Rolling / Stretching',
        sets: 1,
        repsTarget: '10-15 min',
        muscle: 'Full Body',
        tip: 'Hit the spots that are sore from the week.',
      },
      {
        id: 'walk',
        name: 'Light Walk',
        sets: 1,
        repsTarget: '20-30 min',
        muscle: 'Cardio',
        tip: 'Active recovery — move without straining.',
      },
    ],
  },
}

/**
 * Given a start date (ISO string) and today's date, return which workout type to do.
 */
export function getTodayWorkout(startDate) {
  const start = new Date(startDate)
  const today = new Date()
  start.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  const dayIndex = Math.floor((today - start) / (1000 * 60 * 60 * 24))
  const type = WORKOUT_TYPES[dayIndex % 7]
  return { type, workout: WORKOUTS[type] }
}

/**
 * All exercise IDs across all workouts, for PR tracking.
 */
export function getAllExercises() {
  const exercises = []
  for (const [type, workout] of Object.entries(WORKOUTS)) {
    if (type === 'Rest') continue
    for (const ex of workout.exercises) {
      exercises.push({ ...ex, workoutType: type })
    }
  }
  return exercises
}
