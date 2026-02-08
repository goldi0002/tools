import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Wrench, Calculator, FileText, Search, User, Sun, Moon, ChevronRight, Copy, RefreshCw, Hash } from 'lucide-react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import ToolCard from './Tool/ToolCard';

// ==================== HOME PAGE ====================
const HomePage = ({ setActiveSection }) => {
  const tools = [
    { id: 'text', icon: FileText, name: 'Word Counter', description: 'Count words, characters, and more', color: 'bg-gray-900 dark:bg-white' },
    { id: 'text', icon: FileText, name: 'Case Converter', description: 'Convert text between cases', color: 'bg-gray-800 dark:bg-gray-200' },
    { id: 'utilities', icon: Wrench, name: 'Unit Converter', description: 'Convert length, weight, temperature', color: 'bg-gray-700 dark:bg-gray-300' },
    { id: 'calculators', icon: Calculator, name: 'Calculator', description: 'Basic arithmetic calculator', color: 'bg-gray-600 dark:bg-gray-400' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-3">ToolKit</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of simple, useful tools for everyday tasks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <button
              key={index}
              onClick={() => setActiveSection(tool.id)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-black dark:hover:border-white transition-colors text-left group"
            >
              <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <Icon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="font-semibold text-black dark:text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
            </button>
          );
        })}
      </div>

      <ToolCard title="How to Use">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white dark:text-black font-bold">1</span>
            </div>
            <h4 className="font-medium mb-2">Select Tool</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Choose from our collection of tools</p>
          </div>
          <div className="text-center p-4">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white dark:text-black font-bold">2</span>
            </div>
            <h4 className="font-medium mb-2">Enter Input</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Provide the required input data</p>
          </div>
          <div className="text-center p-4">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white dark:text-black font-bold">3</span>
            </div>
            <h4 className="font-medium mb-2">Get Results</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">View and copy your results</p>
          </div>
        </div>
      </ToolCard>
    </div>
  );
};



// ==================== MAIN APP COMPONENT ====================
export default function ToolKit() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const toolCategories = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'text', name: 'Text Tools', icon: FileText },
    { id: 'utilities', name: 'Utilities', icon: Wrench },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator },
    { id: 'calculators', name: 'Calculators', icon: Calculator }
  ];

  const getActiveCategory = () => {
    const category = toolCategories.find(cat => cat.id === activeSection);
    return category ? category.name : 'Home';
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
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
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <HomePage setActiveSection={setActiveSection} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}