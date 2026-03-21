import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import WorkoutLogger from './components/WorkoutLogger'
import StreakCalendar from './components/StreakCalendar'
import PRTracker from './components/PRTracker'
import Settings from './components/Settings'
import { useWorkoutLog } from './hooks/useWorkoutLog'
import { usePRs } from './hooks/usePRs'
import { useSettings } from './hooks/useSettings'

export default function App() {
  const { todayLog, logSet, removeLastSet, markComplete, isCompleted, completedDates } = useWorkoutLog()
  const { prs, checkAndUpdatePR } = usePRs()
  const { settings, updateSettings } = useSettings()

  const shared = { settings, completedDates, isCompleted }

  return (
    <div className="max-w-md mx-auto relative">
      <Routes>
        <Route path="/" element={<Dashboard {...shared} />} />
        <Route
          path="/workout"
          element={
            <WorkoutLogger
              todayLog={todayLog}
              logSet={logSet}
              removeLastSet={removeLastSet}
              markComplete={markComplete}
              isCompleted={isCompleted}
              checkAndUpdatePR={checkAndUpdatePR}
              settings={settings}
            />
          }
        />
        <Route path="/history" element={<StreakCalendar completedDates={completedDates} />} />
        <Route path="/prs" element={<PRTracker prs={prs} />} />
        <Route path="/settings" element={<Settings settings={settings} updateSettings={updateSettings} />} />
      </Routes>
      <Navigation />
    </div>
  )
}
