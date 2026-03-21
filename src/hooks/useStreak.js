import { useMemo } from 'react'

/**
 * Given an array of completed date strings (YYYY-MM-DD),
 * compute current streak and longest streak.
 */
export function useStreak(completedDates) {
  return useMemo(() => {
    if (!completedDates.length) return { current: 0, longest: 0 }

    const sorted = [...new Set(completedDates)].sort()
    const today = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0]

    // Current streak — going backwards from today
    let current = 0
    let check = sorted.includes(today) ? today : (sorted.includes(yesterday) ? yesterday : null)

    if (check) {
      let cursor = new Date(check)
      while (true) {
        const key = cursor.toISOString().split('T')[0]
        if (sorted.includes(key)) {
          current++
          cursor.setDate(cursor.getDate() - 1)
        } else {
          break
        }
      }
    }

    // Longest streak — iterate through all dates
    let longest = 0
    let streak = 1
    for (let i = 1; i < sorted.length; i++) {
      const prev = new Date(sorted[i - 1])
      const curr = new Date(sorted[i])
      const diff = (curr - prev) / 864e5
      if (diff === 1) {
        streak++
      } else {
        longest = Math.max(longest, streak)
        streak = 1
      }
    }
    longest = Math.max(longest, streak)

    return { current, longest }
  }, [completedDates])
}
