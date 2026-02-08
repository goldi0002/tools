import React, { useState } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import HomePage from './pages/HomePage';
import PlanningSection from './sections/PlanningSection';
import TextToolsSection from './sections/TextToolsSection';
import UtilitiesSection from './sections/UtilitiesSection';
import { homeTools, toolCategories, sectionDetails } from '../data/toolkit';

// ==================== MAIN APP SHELL ====================
export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const getActiveCategory = () => {
    const category = toolCategories.find((cat) => cat.id === activeSection);
    return category ? category.name : 'Home';
  };

  const activeDetails = sectionDetails[activeSection];

  const sectionContent = {
    planning: <PlanningSection />,
    text: <TextToolsSection />,
    utilities: <UtilitiesSection />
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {sidebarOpen && (
        <button
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
          type="button"
        />
      )}
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toolCategories={toolCategories}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeCategory={getActiveCategory()}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeSection === 'home' ? (
            <HomePage tools={homeTools} onSelectTool={setActiveSection} />
          ) : (
            sectionContent[activeSection] ?? (
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    {activeDetails?.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">{activeDetails?.description}</p>
                </div>
              </div>
            )
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
