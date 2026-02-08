import React, { useState, useEffect } from 'react';
import { LayoutGrid, Menu, X, Search, Sun, Moon } from 'lucide-react';

// ==================== HEADER COMPONENT ====================
const Header = ({ sidebarOpen, setSidebarOpen, activeCategory }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-30 glass-panel">
      <div className="flex flex-wrap items-center gap-3 px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white shadow-sm">
                <LayoutGrid className="h-4 w-4" />
              </span>
              <div>
                <h1 className="text-lg font-semibold text-slate-900 dark:text-white">Daily Tools</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">{activeCategory}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-3 w-full md:order-none md:flex-1">
          <div className="w-full max-w-xl flex items-center gap-2 px-4 py-2.5 bg-white/80 dark:bg-slate-900/70 rounded-full border border-slate-200/70 dark:border-slate-700/70 shadow-sm focus-within:ring-2 focus-within:ring-slate-400/40 dark:focus-within:ring-slate-500/40">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools, shortcuts, and quick helpers..."
              className="bg-transparent border-none outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 w-full"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden lg:inline-flex nav-chip">Everyday essentials</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
