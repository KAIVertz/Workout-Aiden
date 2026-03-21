// Coach-like messages — firm, encouraging, no fluff.
// Rotates daily based on day-of-year.

export const COACH_MESSAGES = [
  "The gym doesn't care how you feel. Show up anyway.",
  "Every rep you skip today is a debt you pay later.",
  "You don't build a body in a day. You build it one session at a time.",
  "The difference between who you are and who you want to be is this workout.",
  "Consistency beats perfection. Always has, always will.",
  "Your future self is watching. Don't disappoint them.",
  "Pain is temporary. Skipping is permanent regret.",
  "Nobody gets strong by thinking about it. Move.",
  "A good workout doesn't require motivation — it creates it.",
  "You've done it before. You'll do it again. Start.",
  "There's no bad workout. There's only workouts and skipped workouts.",
  "The weight doesn't lie. Pick it up.",
  "Champions train when they don't feel like it. So do you.",
  "One more rep. One more set. One more day. That's how it's built.",
  "You said you wanted this. Prove it.",
  "Discipline is just doing the thing before the feeling arrives.",
  "Your streak didn't build itself. Neither does your body.",
  "Show up. Do the work. Go home. Repeat.",
  "You're not tired. You're just not started yet.",
  "Today's workout is tomorrow's strength.",
  "Nobody remembers the days they skipped.",
  "Less thinking. More lifting.",
  "Make today's session count. You can rest when it's done.",
  "The hardest part is lacing up. You've already won that one.",
  "Build the body by building the habit first.",
  "Progress is made in the reps you don't feel like doing.",
  "Don't negotiate with your lazy side. Just go.",
  "Every workout is a vote for the person you want to become.",
  "You're one workout away from a better mood.",
  "Grit > Talent. Always.",
  "Stop waiting to feel ready. Ready is a myth.",
  "Stronger yesterday, stronger today, stronger tomorrow.",
  "What's harder: this workout or living with regret? Exactly.",
  "The clock is ticking. Get to work.",
  "Small efforts compound. Don't break the chain.",
  "Your comfort zone has a ceiling. Blow past it.",
  "This is the work. This is how it's done.",
  "No one said it would be easy. They said it would be worth it.",
  "You've come too far to stop now.",
  "Each session is a brick. Build the wall.",
]

export const REST_DAY_MESSAGES = [
  "Recovery is part of the work. Eat well, sleep well, come back stronger.",
  "Your muscles grow on rest days. Respect the process.",
  "Today you recover. Tomorrow you dominate.",
  "Rest is not weakness. It's part of the system.",
  "Recharge. Refuel. Return.",
]

/**
 * Returns a deterministic message based on today's date.
 */
export function getDailyMessage(isRest = false) {
  const pool = isRest ? REST_DAY_MESSAGES : COACH_MESSAGES
  const now = new Date()
  const dayOfYear = Math.floor(
    (now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  )
  return pool[dayOfYear % pool.length]
}

/**
 * Returns a streak-specific hype message.
 */
export function getStreakMessage(streak) {
  if (streak === 0) return "Start your streak today. Day 1 is the hardest."
  if (streak === 1) return "Day 1 done. The streak has begun."
  if (streak < 7) return `${streak} days straight. Keep the chain alive.`
  if (streak === 7) return "One full week. That's not a coincidence — that's discipline."
  if (streak < 14) return `${streak} days. You're building something real.`
  if (streak === 14) return "Two weeks of showing up. Most people quit before this."
  if (streak < 30) return `${streak} days strong. The habit is hardwiring in.`
  if (streak === 30) return "30 days. One month. This is who you are now."
  if (streak < 60) return `${streak} days. You're in the top 1% of consistency.`
  if (streak === 60) return "60 days. Two months. Unstoppable."
  return `${streak} days. Absolute machine. Don't stop.`
}
