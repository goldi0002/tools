import React, { useState, useEffect } from 'react';

// ==================== TOOL COMPONENTS ====================
const ToolCard = ({ title, description, children, className = '' }) => {
    return (
        <div className={`tool-card ${className}`}>
            <div className="p-5 border-b border-white/70 dark:border-slate-800/80">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{title}</h3>
                {description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
                )}
            </div>
            <div className="p-5">
                {children}
            </div>
        </div>
    );
};
export default ToolCard;
