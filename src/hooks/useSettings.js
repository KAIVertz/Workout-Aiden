import { useState, useCallback } from 'react'

const KEY = 'wa_settings'

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}')
    return {
      reminderTime: '08:00',
      startDate: new Date().toISOString().split('T')[0],
      notificationsEnabled: false,
      ...saved,
    }
  } catch {
    return {
      reminderTime: '08:00',
      startDate: new Date().toISOString().split('T')[0],
      notificationsEnabled: false,
    }
  }
}

export function useSettings() {
  const [settings, setSettings] = useState(loadSettings)

  const updateSettings = useCallback((patch) => {
    setSettings(prev => {
      const updated = { ...prev, ...patch }
      localStorage.setItem(KEY, JSON.stringify(updated))
      return updated
    })
  }, [])

  return { settings, updateSettings }
}
