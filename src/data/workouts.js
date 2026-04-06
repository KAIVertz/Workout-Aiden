// PPL Split — 6-day cycle, day 7 = active recovery
// Equipment: dumbbells (max 7 kg) + resistance bands + bench/chair
// Level: Intermediate | Goal: Build mass overall
// Note: Light weights → higher reps (15–20), bands, bodyweight compounds

export const WORKOUT_TYPES = ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs', 'Rest']

export const WORKOUTS = {
  Push: {
    label: 'Push Day',
    subtitle: 'Chest · Shoulders · Triceps · Core',
    color: 'from-orange-500 to-red-600',
    accent: 'text-orange-400',
    icon: '🔥',
    exercises: [
      {
        id: 'incline_push_up',
        name: 'Incline Push-Up',
        sets: 4,
        repsTarget: '12–15',
        muscle: 'Chest / Triceps',
        tip: 'Hands on the bench, body straight as a board. This builds you up to floor push-ups — nail these first.',
      },
      {
        id: 'incline_dumbbell_press',
        name: 'Incline Dumbbell Press',
        sets: 4,
        repsTarget: '15–20',
        muscle: 'Upper Chest',
        tip: 'Bench at ~45°. 7 kg — go slow on the way down, 3 seconds. Speed kills gains here.',
      },
      {
        id: 'dumbbell_fly',
        name: 'Dumbbell Chest Fly',
        sets: 3,
        repsTarget: '15–20',
        muscle: 'Chest',
        tip: 'Slight bend in elbows. Stretch at the bottom, squeeze at the top.',
      },
      {
        id: 'lateral_raise',
        name: 'Lateral Raise',
        sets: 4,
        repsTarget: '15–20',
        muscle: 'Side Delts',
        tip: 'Lead with elbows, thumbs slightly down. No shrugging.',
      },
      {
        id: 'band_overhead_press',
        name: 'Band Overhead Press',
        sets: 3,
        repsTarget: '15–20',
        muscle: 'Front Delts / Shoulders',
        tip: 'Stand on the band. Press straight up, lock out at the top.',
      },
      {
        id: 'dumbbell_front_raise',
        name: 'Dumbbell Front Raise',
        sets: 3,
        repsTarget: '12–15',
        muscle: 'Front Delts',
        tip: 'Stop at shoulder height. Don\'t use momentum.',
      },
      {
        id: 'band_tricep_pushdown',
        name: 'Band Tricep Pushdown',
        sets: 3,
        repsTarget: '20–25',
        muscle: 'Triceps',
        tip: 'Elbows glued to your sides. Full lock-out every rep.',
      },
      {
        id: 'tricep_dip_chair',
        name: 'Chair Tricep Dip',
        sets: 3,
        repsTarget: '12–15',
        muscle: 'Triceps',
        tip: 'Lower until elbows hit 90°. Push through the heel of your palms.',
      },
      // Core finisher
      {
        id: 'plank',
        name: 'Plank Hold',
        sets: 3,
        repsTarget: '30–60 sec',
        muscle: 'Core',
        tip: 'Squeeze everything — glutes, abs, quads. Don\'t let your hips sag.',
      },
      {
        id: 'incline_push_up_burnout',
        name: 'Incline Push-Up Burnout',
        sets: 1,
        repsTarget: 'Max reps',
        muscle: 'Chest / Triceps',
        tip: 'Finisher. Hands on the bench. Go until you physically can\'t. Track the number — beat it next time.',
      },
    ],
  },

  Pull: {
    label: 'Pull Day',
    subtitle: 'Back · Biceps · Rear Delts · Core',
    color: 'from-blue-500 to-indigo-600',
    accent: 'text-blue-400',
    icon: '⚡',
    exercises: [
      {
        id: 'band_row',
        name: 'Band Bent-Over Row',
        sets: 4,
        repsTarget: '20–25',
        muscle: 'Back / Lats',
        tip: 'Stand on the band, hinge 45°. Pull to your belly button, squeeze lats.',
      },
      {
        id: 'dumbbell_row',
        name: 'Single-Arm Dumbbell Row',
        sets: 4,
        repsTarget: '15–20 each',
        muscle: 'Back',
        tip: 'Pull to your hip, not your shoulder. Big stretch at the bottom.',
      },
      {
        id: 'dumbbell_pullover',
        name: 'Dumbbell Pullover',
        sets: 3,
        repsTarget: '12–15',
        muscle: 'Lats',
        tip: 'Keep arms slightly bent. Focus on the lat stretch — not the arms.',
      },
      {
        id: 'band_face_pull',
        name: 'Band Face Pull',
        sets: 4,
        repsTarget: '20–25',
        muscle: 'Rear Delts / Traps',
        tip: 'Pull to your face, thumbs toward ears. This builds that 3D shoulder look.',
      },
      {
        id: 'band_pull_apart',
        name: 'Band Pull-Apart',
        sets: 3,
        repsTarget: '20–25',
        muscle: 'Rear Delts',
        tip: 'Arms straight. Squeeze your shoulder blades hard at the back.',
      },
      {
        id: 'dumbbell_curl',
        name: 'Dumbbell Bicep Curl',
        sets: 4,
        repsTarget: '15–20',
        muscle: 'Biceps',
        tip: 'Supinate at the top — twist your pinky up. Full range, no half reps.',
      },
      {
        id: 'hammer_curl',
        name: 'Hammer Curl',
        sets: 3,
        repsTarget: '15–20',
        muscle: 'Biceps / Brachialis',
        tip: 'Neutral grip. This hits the brachialis — makes your arms look thick.',
      },
      {
        id: 'band_curl',
        name: 'Band Bicep Curl',
        sets: 2,
        repsTarget: '20–25',
        muscle: 'Biceps',
        tip: 'Finisher. Slow it way down — 3 seconds up, 3 seconds down.',
      },
      // Core finisher
      {
        id: 'leg_raise',
        name: 'Lying Leg Raise',
        sets: 3,
        repsTarget: '12–15',
        muscle: 'Core / Lower Abs',
        tip: 'Lower legs slow — don\'t let them touch the floor. Control it.',
      },
    ],
  },

  Legs: {
    label: 'Leg Day',
    subtitle: 'Quads · Hamstrings · Glutes · Calves · Core',
    color: 'from-green-500 to-emerald-600',
    accent: 'text-green-400',
    icon: '🦵',
    exercises: [
      {
        id: 'goblet_squat',
        name: 'Goblet Squat',
        sets: 4,
        repsTarget: '15–20',
        muscle: 'Quads / Glutes',
        tip: 'Hold the dumbbell at your chest. Squat deep — below parallel if you can.',
      },
      {
        id: 'bulgarian_split_squat',
        name: 'Bulgarian Split Squat',
        sets: 3,
        repsTarget: '12–15 each',
        muscle: 'Quads / Glutes',
        tip: 'Back foot on the bench. Front knee tracks your toes. This will burn.',
      },
      {
        id: 'dumbbell_rdl',
        name: 'Dumbbell Romanian Deadlift',
        sets: 4,
        repsTarget: '15–20',
        muscle: 'Hamstrings / Glutes',
        tip: 'Push hips back, feel the hamstring stretch. Keep a flat back.',
      },
      {
        id: 'dumbbell_reverse_lunge',
        name: 'Dumbbell Reverse Lunge',
        sets: 3,
        repsTarget: '12–15 each',
        muscle: 'Quads / Glutes',
        tip: 'Step back far enough that front shin stays vertical.',
      },
      {
        id: 'band_squat',
        name: 'Band Squat',
        sets: 3,
        repsTarget: '20–25',
        muscle: 'Quads / Glutes',
        tip: 'Add the band for extra tension at the top. Don\'t let knees cave in.',
      },
      {
        id: 'dumbbell_hip_thrust',
        name: 'Dumbbell Hip Thrust',
        sets: 4,
        repsTarget: '15–20',
        muscle: 'Glutes',
        tip: 'DB on hips, upper back on bench. Squeeze glutes hard at the top — 1 second hold.',
      },
      {
        id: 'standing_calf_raise',
        name: 'Standing Calf Raise',
        sets: 4,
        repsTarget: '20–25',
        muscle: 'Calves',
        tip: 'Full stretch at the bottom. Pause at the top. Calves need high reps.',
      },
      // Core finisher
      {
        id: 'crunch',
        name: 'Crunch',
        sets: 3,
        repsTarget: '20–25',
        muscle: 'Abs',
        tip: 'Exhale hard at the top. Abs, not neck.',
      },
      {
        id: 'bicycle_crunch',
        name: 'Bicycle Crunch',
        sets: 3,
        repsTarget: '20 each side',
        muscle: 'Obliques / Abs',
        tip: 'Slow and controlled. Touch elbow to knee every rep.',
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
        id: 'stretching',
        name: 'Full Body Stretch',
        sets: 1,
        repsTarget: '10–15 min',
        muscle: 'Full Body',
        tip: 'Hit whatever is sore. Chest, hips, hamstrings — hold each for 30 seconds.',
      },
      {
        id: 'walk',
        name: 'Light Walk',
        sets: 1,
        repsTarget: '20–30 min',
        muscle: 'Cardio / Recovery',
        tip: 'Get outside if you can. This accelerates recovery — don\'t skip it.',
      },
      {
        id: 'band_mobility',
        name: 'Band Shoulder Mobility',
        sets: 2,
        repsTarget: '10–15',
        muscle: 'Shoulders',
        tip: 'Overhead band pass-throughs. Keep it easy — this is maintenance, not training.',
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
