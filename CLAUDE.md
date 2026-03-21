# Workout-Aiden — Claude Context

## What This App Is

A personal workout motivation web app built for one person. The goal: make it so satisfying and motivating that skipping a workout feels wrong.

**User profile:**
- Goal: Build muscle
- Location: Home (dumbbells + resistance bands)
- Frequency: 6-7 days/week
- Program: Push / Pull / Legs split (6-day cycle, day 7 = active recovery)
- Tone: Coach-like — encouraging but firm, no fluff

## Tech Stack

- **React + Vite** — fast dev server, minimal config
- **Tailwind CSS** — utility-first styling
- **LocalStorage** — all data persisted locally, no backend, no auth
- **Browser Notifications API** — daily workout reminders

## File Structure

```
src/
  data/
    workouts.js       # PPL split definitions + exercises
    motivation.js     # Coach messages pool
  hooks/
    useWorkoutLog.js  # Log sets/reps/weight, read history
    useStreak.js      # Streak calculation from log
    useNotifications.js # Request permission, schedule reminders
  components/
    Dashboard.jsx     # Landing: streak, today's workout, coach message
    WorkoutLogger.jsx # Log today's sets/reps/weight per exercise
    StreakCalendar.jsx # GitHub-style heatmap of workout days
    PRTracker.jsx     # Personal records per exercise
    Navigation.jsx    # Bottom nav bar
  App.jsx             # Router + layout
  main.jsx
  index.css
```

## Core Features

1. **Dashboard** — shows current streak, today's workout type (Push/Pull/Legs), a coach message, and a "START WORKOUT" CTA
2. **Workout Logger** — tap exercises, log sets with reps + weight, mark workout complete
3. **Streak Calendar** — visual heatmap, current streak count, longest streak
4. **PR Tracker** — auto-detected personal records per exercise with date
5. **Daily Reminders** — browser notification at user-chosen time

## Data Model (LocalStorage keys)

- `wa_log` — `{ "2026-03-21": { completed: true, exercises: { "bench_press": [{reps, weight}] } } }`
- `wa_prs` — `{ "bench_press": { weight: 40, reps: 8, date: "2026-03-21" } }`
- `wa_settings` — `{ reminderTime: "08:00", startDate: "2026-03-21" }`

## Workout Program — PPL Split

| Day | Type | Focus |
|-----|------|-------|
| 1 | Push | Chest, Shoulders, Triceps |
| 2 | Pull | Back, Biceps |
| 3 | Legs | Quads, Hamstrings, Glutes, Calves |
| 4 | Push | Chest, Shoulders, Triceps |
| 5 | Pull | Back, Biceps |
| 6 | Legs | Quads, Hamstrings, Glutes, Calves |
| 7 | Rest | Active recovery / mobility |

## Development Commands

```bash
npm install       # install deps
npm run dev       # start dev server at localhost:5173
npm run build     # production build
npm run preview   # preview production build
```

## Claude Guidelines

- **Never add a backend** — keep everything in LocalStorage
- **Keep the tone coach-like** — firm, motivating, no corporate fluff
- **Respect the PPL split** — don't change the program without asking
- **Mobile-first UI** — the user checks this on their phone at home
- **Dark theme only** — no light mode, dark bg with vibrant accent colors
- **No over-engineering** — simple hooks, simple components, localStorage
