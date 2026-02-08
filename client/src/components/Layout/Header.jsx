import React, { useState, useEffect } from 'react';
import { Calculator, Menu, X, Search, Sun, Moon, Sparkles } from 'lucide-react';

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
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 md:px-6 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
                <Calculator className="h-4 w-4" />
              </span>
              <h1 className="text-lg font-semibold text-black dark:text-white">ToolKit AI</h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 px-2 py-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                Ready to use
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{activeCategory}</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center min-w-[200px]">
          <div className="w-full max-w-md flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools, workflows, prompts..."
              className="bg-transparent border-none outline-none text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-900 transition-colors">
            <Sparkles className="w-4 h-4" />
            New AI Tool
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
