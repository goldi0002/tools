import React, { useMemo, useState, useEffect } from 'react';
import ToolCard from '../Tool/ToolCard';

const defaultTasks = [
  { id: 'plan-1', text: 'Review priorities for today', done: false },
  { id: 'plan-2', text: 'Block 30 minutes for deep work', done: false },
  { id: 'plan-3', text: 'Capture one win by end of day', done: false }
];

const focusPresets = [
  { label: '25 min', value: 25 },
  { label: '45 min', value: 45 },
  { label: '60 min', value: 60 }
];

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const PlanningSection = () => {
  const [tasks, setTasks] = useState(defaultTasks);
  const [taskInput, setTaskInput] = useState('');
  const [duration, setDuration] = useState(focusPresets[0].value);
  const [remainingSeconds, setRemainingSeconds] = useState(focusPresets[0].value * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setRemainingSeconds(duration * 60);
    setIsRunning(false);
  }, [duration]);

  useEffect(() => {
    if (!isRunning) return undefined;
    if (remainingSeconds <= 0) {
      setIsRunning(false);
      return undefined;
    }

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, remainingSeconds]);

  const completedCount = useMemo(() => tasks.filter((task) => task.done).length, [tasks]);

  const handleAddTask = () => {
    const trimmed = taskInput.trim();
    if (!trimmed) return;
    setTasks((prev) => [{ id: `plan-${Date.now()}`, text: trimmed, done: false }, ...prev]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const resetTimer = () => {
    setRemainingSeconds(duration * 60);
    setIsRunning(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <ToolCard
        title="Daily Planner"
        description="Track priorities, wins, and tasks for the day."
      >
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="input-field"
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            placeholder="Add a task or focus item"
            type="text"
          />
          <button className="btn-primary" type="button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <div className="mt-5 space-y-3">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {completedCount} of {tasks.length} tasks complete
          </div>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/70 px-4 py-3"
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 accent-slate-900 dark:accent-white"
                />
                <span
                  className={`flex-1 text-sm ${
                    task.done
                      ? 'line-through text-slate-400 dark:text-slate-500'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {task.text}
                </span>
                <button
                  type="button"
                  onClick={() => removeTask(task.id)}
                  className="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </ToolCard>

      <ToolCard
        title="Focus Timer"
        description="Run quick focus sessions with a built-in countdown."
      >
        <div className="flex flex-wrap items-center gap-3">
          {focusPresets.map((preset) => (
            <button
              key={preset.value}
              type="button"
              onClick={() => setDuration(preset.value)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                duration === preset.value
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 px-6 py-4 text-3xl font-semibold text-slate-900 dark:text-white">
            {formatTime(remainingSeconds)}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsRunning((prev) => !prev)}
              className="btn-primary"
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button type="button" onClick={resetTimer} className="btn-secondary">
              Reset
            </button>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Tip: Pair the timer with one priority from your Daily Planner.
        </p>
      </ToolCard>
    </div>
  );
};

export default PlanningSection;
