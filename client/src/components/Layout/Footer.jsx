import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Wrench, Calculator, FileText, Search, User, Sun, Moon, ChevronRight, Copy, RefreshCw, Hash } from 'lucide-react';
// ==================== FOOTER COMPONENT ====================
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-8">
            <div className="px-4 md:px-6 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <p>© 2024 ToolKit. Simple tools for everyday use.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <button className="hover:text-black dark:hover:text-white transition-colors">
                            Privacy
                        </button>
                        <button className="hover:text-black dark:hover:text-white transition-colors">
                            Terms
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;