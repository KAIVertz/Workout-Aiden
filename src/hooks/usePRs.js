import { useState, useCallback } from 'react'

const KEY = 'wa_prs'

function loadPRs() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

function savePRs(prs) {
  localStorage.setItem(KEY, JSON.stringify(prs))
}

export function usePRs() {
  const [prs, setPRs] = useState(loadPRs)

  /**
   * Check if a new set is a PR. If so, update.
   * Returns true if it's a new PR.
   */
  const checkAndUpdatePR = useCallback((exerciseId, { reps, weight }) => {
    let isNewPR = false
    setPRs(prev => {
      const current = prev[exerciseId]
      // PR = heavier weight, or same weight with more reps
      const better =
        !current ||
        weight > current.weight ||
        (weight === current.weight && reps > current.reps)

      if (better) {
        isNewPR = true
        const updated = {
          ...prev,
          [exerciseId]: {
            weight,
            reps,
            date: new Date().toISOString().split('T')[0],
          },
        }
        savePRs(updated)
        return updated
      }
      return prev
    })
    return isNewPR
  }, [])

  return { prs, checkAndUpdatePR }
}
