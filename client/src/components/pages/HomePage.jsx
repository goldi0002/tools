import React from 'react';
import { Bot, Sparkles } from 'lucide-react';
import ToolCard from '../Tool/ToolCard';

const HomePage = ({ tools, onSelectTool }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white shadow-sm">
            <Bot className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">ToolKit AI</h1>
              <span className="nav-chip">
                <Sparkles className="h-3.5 w-3.5" />
                2026 Ready
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Design-forward productivity suite</p>
          </div>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Build tools ready to use with AI-powered helpers and classic utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={`${tool.id}-${tool.name}`}
              onClick={() => onSelectTool(tool.id)}
              className="group rounded-2xl border border-white/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/70 p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600"
            >
              <div className={`w-12 h-12 ${tool.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{tool.description}</p>
            </button>
          );
        })}
      </div>

      <ToolCard title="How to Use" description="Three steps to get value instantly.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="w-9 h-9 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <span className="text-white dark:text-slate-900 font-semibold">1</span>
            </div>
            <h4 className="font-medium mb-2">Select Tool</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Choose from our collection of tools</p>
          </div>
          <div className="text-center p-4">
            <div className="w-9 h-9 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <span className="text-white dark:text-slate-900 font-semibold">2</span>
            </div>
            <h4 className="font-medium mb-2">Enter Input</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Provide the required input data</p>
          </div>
          <div className="text-center p-4">
            <div className="w-9 h-9 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <span className="text-white dark:text-slate-900 font-semibold">3</span>
            </div>
            <h4 className="font-medium mb-2">Get Results</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">View and copy your results</p>
          </div>
        </div>
      </ToolCard>
    </div>
  );
};

export default HomePage;
