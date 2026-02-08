import React from 'react';
import { ChevronRight, LayoutGrid } from 'lucide-react';

// ==================== SIDEBAR COMPONENT ====================
const Sidebar = ({ sidebarOpen, activeSection, setActiveSection, toolCategories }) => {
  return (
    <aside
      className={`${
        sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-16'
      } glass-panel border-r border-white/70 dark:border-slate-800/80 transition-all duration-300 overflow-hidden flex flex-col fixed lg:relative h-full z-30`}
    >
      {/* Logo */}
      <div className="px-4 py-4 border-b border-white/70 dark:border-slate-800/80">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 rounded-2xl flex items-center justify-center shadow-sm">
            <LayoutGrid className="w-4 h-4 text-white" />
          </div>
          {sidebarOpen && (
            <div className="ml-3">
              <h1 className="text-lg font-semibold text-slate-900 dark:text-white">Daily Tools</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Toolkit</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {toolCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeSection === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveSection(category.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-xl text-sm transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900 font-medium'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
              }`}
              title={!sidebarOpen ? category.name : ''}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && (
                <>
                  <span className="font-medium flex-1 text-left">{category.name}</span>
                  {category.items && <ChevronRight className="w-4 h-4 opacity-60" />}
                </>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
export default Sidebar;
