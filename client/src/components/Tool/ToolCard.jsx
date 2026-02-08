import React, { useState, useEffect } from 'react';

// ==================== TOOL COMPONENTS ====================
const ToolCard = ({ title, description, children, className = '' }) => {
    return (
        <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm ${className}`}>
            <div className="p-5 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-1">{title}</h3>
                {description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                )}
            </div>
            <div className="p-5">
                {children}
            </div>
        </div>
    );
};
export default ToolCard;
