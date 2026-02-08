import { Home, Ruler, Sigma, Type, FileText, Clock, ClipboardList } from 'lucide-react';

export const homeTools = [
  { id: 'text', icon: FileText, name: 'Word Counter', description: 'Count words, characters, and more', color: 'bg-indigo-500' },
  { id: 'text', icon: Type, name: 'Case Converter', description: 'Convert text between cases', color: 'bg-sky-500' },
  { id: 'utilities', icon: Ruler, name: 'Unit Converter', description: 'Convert length, weight, temperature', color: 'bg-emerald-500' },
  { id: 'calculators', icon: Sigma, name: 'Quick Calculator', description: 'Fast arithmetic for daily tasks', color: 'bg-slate-700' },
  { id: 'time', icon: Clock, name: 'Time Helpers', description: 'Time zones, timers, and converters', color: 'bg-violet-500' }
];

export const toolCategories = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'text', name: 'Text Tools', icon: Type },
  { id: 'utilities', name: 'Utilities', icon: Ruler },
  { id: 'calculators', name: 'Calculators', icon: Sigma },
  { id: 'time', name: 'Time Tools', icon: Clock },
  { id: 'productivity', name: 'Productivity', icon: ClipboardList }
];

export const sectionDetails = {
  text: {
    title: 'Text Tools',
    description: 'Clean, format, and analyze text with quick one-click helpers.',
    highlights: [
      { title: 'Word Counter', detail: 'Track characters, words, and sentence counts in seconds.' },
      { title: 'Case Converter', detail: 'Switch between sentence, title, and snake case styles.' },
      { title: 'Text Cleaner', detail: 'Strip extra spaces and normalize formatting quickly.' }
    ]
  },
  utilities: {
    title: 'Utilities',
    description: 'Everyday conversions and helpers to keep projects moving.',
    highlights: [
      { title: 'Unit Converter', detail: 'Length, weight, and temperature conversions in one place.' },
      { title: 'Quick Lookup', detail: 'Find common formulas and references instantly.' },
      { title: 'Time Helpers', detail: 'Work with time zones and timelines with confidence.' }
    ]
  },
  calculators: {
    title: 'Calculators',
    description: 'Fast calculations for daily work and planning.',
    highlights: [
      { title: 'Basic Calculator', detail: 'Handle standard arithmetic without distraction.' },
      { title: 'Percent Helper', detail: 'Quickly compare deltas, discounts, and ratios.' },
      { title: 'Split Costs', detail: 'Share bills or budgets with simple breakdowns.' }
    ]
  },
  time: {
    title: 'Time Tools',
    description: 'Everyday time helpers for planning and scheduling.',
    highlights: [
      { title: 'Time Zones', detail: 'Compare regions quickly for meetings and planning.' },
      { title: 'Timer', detail: 'Focus with quick timers and countdowns.' },
      { title: 'Date Math', detail: 'Add or subtract days with confidence.' }
    ]
  },
  productivity: {
    title: 'Productivity',
    description: 'Lightweight checklists and snippets to stay organized.',
    highlights: [
      { title: 'Quick Notes', detail: 'Capture notes and snippets in seconds.' },
      { title: 'Task List', detail: 'Lightweight checklists for daily work.' },
      { title: 'Templates', detail: 'Reuse common text blocks and formats.' }
    ]
  }
};
