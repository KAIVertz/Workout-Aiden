import { useState } from 'react'

export default function Settings({ settings, updateSettings }) {
  const [saved, setSaved] = useState(false)
  const [notifStatus, setNotifStatus] = useState(null)

  function handleSave(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    updateSettings({
      reminderTime: fd.get('reminderTime'),
      startDate: fd.get('startDate'),
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  async function requestNotifications() {
    if (!('Notification' in window)) {
      setNotifStatus('not-supported')
      return
    }
    const perm = await Notification.requestPermission()
    if (perm === 'granted') {
      updateSettings({ notificationsEnabled: true })
      setNotifStatus('granted')
      // Schedule a test notification
      new Notification('Workout Aiden 💪', {
        body: "Notifications enabled. I'll remind you to train.",
        icon: '/favicon.svg',
      })
    } else {
      setNotifStatus('denied')
    }
  }

  function handleReset() {
    if (confirm('Reset ALL data? This cannot be undone.')) {
      localStorage.removeItem('wa_log')
      localStorage.removeItem('wa_prs')
      localStorage.removeItem('wa_settings')
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 px-6 pt-14 pb-8 border-b border-gray-800">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
          Configure
        </p>
        <h1 className="text-3xl font-black text-white">⚙️ Settings</h1>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto space-y-6">
        {/* Main settings form */}
        <form onSubmit={handleSave} className="bg-gray-900 rounded-2xl p-5 border border-gray-800 space-y-5">
          <div>
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">
              Program Start Date
            </label>
            <p className="text-gray-500 text-xs mb-2">
              Day 1 of your PPL cycle. Determines what workout you get each day.
            </p>
            <input
              type="date"
              name="startDate"
              defaultValue={settings.startDate}
              className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-700 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest block mb-2">
              Daily Reminder Time
            </label>
            <input
              type="time"
              name="reminderTime"
              defaultValue={settings.reminderTime}
              className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-700 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold transition-colors"
          >
            {saved ? '✓ Saved!' : 'Save Settings'}
          </button>
        </form>

        {/* Notifications */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Notifications
          </p>
          {settings.notificationsEnabled ? (
            <p className="text-green-400 text-sm font-semibold">✅ Notifications are enabled.</p>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-3">
                Get a daily push to remind you to train. You'll need to allow browser notifications.
              </p>
              <button
                onClick={requestNotifications}
                className="w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-colors"
              >
                Enable Notifications
              </button>
              {notifStatus === 'denied' && (
                <p className="text-red-400 text-xs mt-2">
                  Permission denied. Enable in your browser settings.
                </p>
              )}
              {notifStatus === 'not-supported' && (
                <p className="text-yellow-400 text-xs mt-2">
                  Notifications not supported in this browser.
                </p>
              )}
            </>
          )}
        </div>

        {/* About */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Program
          </p>
          <div className="space-y-2 text-sm">
            {[
              ['Day 1', '🔥 Push', 'Chest, Shoulders, Triceps'],
              ['Day 2', '⚡ Pull', 'Back, Biceps'],
              ['Day 3', '🦵 Legs', 'Quads, Hamstrings, Glutes'],
              ['Day 4', '🔥 Push', 'Chest, Shoulders, Triceps'],
              ['Day 5', '⚡ Pull', 'Back, Biceps'],
              ['Day 6', '🦵 Legs', 'Quads, Hamstrings, Glutes'],
              ['Day 7', '🧘 Rest', 'Active Recovery'],
            ].map(([day, type, muscles]) => (
              <div key={day} className="flex items-start gap-3">
                <span className="text-gray-600 w-10 shrink-0">{day}</span>
                <span className="text-white font-medium w-20 shrink-0">{type}</span>
                <span className="text-gray-500">{muscles}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-gray-900 rounded-2xl p-5 border border-red-900/30">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Danger Zone
          </p>
          <button
            onClick={handleReset}
            className="w-full py-3 rounded-xl bg-red-900/30 hover:bg-red-900/50 text-red-400 font-semibold text-sm transition-colors"
          >
            Reset All Data
          </button>
        </div>
      </div>
    </div>
  )
}
