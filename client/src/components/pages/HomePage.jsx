import React from 'react';
import ToolCard from '../Tool/ToolCard';

const HomePage = ({ tools, onSelectTool }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-3">ToolKit AI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          AI-powered helpers and classic utilities to speed up daily work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={`${tool.id}-${tool.name}`}
              onClick={() => onSelectTool(tool.id)}
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

export default HomePage;
