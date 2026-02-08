import React from 'react';

// ==================== FOOTER COMPONENT ====================
const Footer = () => {
  return (
    <footer className="glass-panel border-t border-white/70 dark:border-slate-800/80 mt-8">
      <div className="px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <p>© 2024 ToolKit. Simple tools for everyday use.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy
            </button>
            <button className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
