import React from 'react';
import ToolCard from '../Tool/ToolCard';

const SectionPlaceholder = ({ title, description, highlights }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <ToolCard key={item.title} title={item.title}>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
          </ToolCard>
        ))}
      </div>
    </div>
  );
};

export default SectionPlaceholder;
