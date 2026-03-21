import { useState, useCallback } from 'react'

const KEY = 'wa_log'

function loadLog() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

function saveLog(log) {
  localStorage.setItem(KEY, JSON.stringify(log))
}

function todayKey() {
  return new Date().toISOString().split('T')[0]
}

export function useWorkoutLog() {
  const [log, setLog] = useState(loadLog)

  const today = todayKey()
  const todayLog = log[today] || { completed: false, exercises: {} }

  const logSet = useCallback((exerciseId, setData) => {
    setLog(prev => {
      const updated = { ...prev }
      const day = updated[today] || { completed: false, exercises: {} }
      const sets = day.exercises[exerciseId] || []
      updated[today] = {
        ...day,
        exercises: {
          ...day.exercises,
          [exerciseId]: [...sets, setData],
        },
      }
      saveLog(updated)
      return updated
    })
  }, [today])

  const removeLastSet = useCallback((exerciseId) => {
    setLog(prev => {
      const updated = { ...prev }
      const day = updated[today] || { completed: false, exercises: {} }
      const sets = [...(day.exercises[exerciseId] || [])]
      sets.pop()
      updated[today] = {
        ...day,
        exercises: { ...day.exercises, [exerciseId]: sets },
      }
      saveLog(updated)
      return updated
    })
  }, [today])

  const markComplete = useCallback(() => {
    setLog(prev => {
      const updated = { ...prev }
      const day = updated[today] || { completed: false, exercises: {} }
      updated[today] = { ...day, completed: true, completedAt: new Date().toISOString() }
      saveLog(updated)
      return updated
    })
  }, [today])

  const isCompleted = todayLog.completed

  // Returns sorted array of logged dates
  const loggedDates = Object.keys(log).sort()

  // Returns dates that are marked complete
  const completedDates = Object.entries(log)
    .filter(([, v]) => v.completed)
    .map(([k]) => k)

  return {
    log,
    todayLog,
    logSet,
    removeLastSet,
    markComplete,
    isCompleted,
    loggedDates,
    completedDates,
  }
}
