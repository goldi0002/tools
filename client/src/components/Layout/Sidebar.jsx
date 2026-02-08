import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Wrench, Calculator, FileText, Search, User, Sun, Moon, ChevronRight, Copy, RefreshCw, Hash } from 'lucide-react';

// ==================== SIDEBAR COMPONENT ====================
const Sidebar = ({ sidebarOpen, activeSection, setActiveSection, toolCategories }) => {
    return (
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-16'
        } bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden flex flex-col fixed lg:relative h-full z-20`}
      >
        {/* Logo */}
        <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <Calculator className="w-4 h-4 text-white dark:text-black" />
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <h1 className="text-lg font-bold text-black dark:text-white">ToolKit</h1>
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
                className={`w-full flex items-center gap-3 p-3 mb-1 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-black dark:bg-white text-white dark:text-black font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                title={!sidebarOpen ? category.name : ''}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="font-medium flex-1 text-left">{category.name}</span>
                    {category.items && (
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    )}
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