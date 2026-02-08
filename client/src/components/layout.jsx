import React, { useState } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import HomePage from './pages/HomePage';
import SectionPlaceholder from './sections/SectionPlaceholder';
import { homeTools, toolCategories, sectionDetails } from '../data/toolkit';

// ==================== MAIN APP COMPONENT ====================
export default function ToolKit() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const getActiveCategory = () => {
    const category = toolCategories.find((cat) => cat.id === activeSection);
    return category ? category.name : 'Home';
  };

  const activeDetails = sectionDetails[activeSection];

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
            <SectionPlaceholder
              title={activeDetails?.title}
              description={activeDetails?.description}
              highlights={activeDetails?.highlights ?? []}
            />
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
