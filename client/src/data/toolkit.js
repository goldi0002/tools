import { Bot, Home, Ruler, Sigma, Type, Sparkles, FileText } from 'lucide-react';

export const homeTools = [
  { id: 'ai', icon: Bot, name: 'AI Helper', description: 'Draft, summarize, and refine ideas', color: 'bg-slate-900' },
  { id: 'text', icon: FileText, name: 'Word Counter', description: 'Count words, characters, and more', color: 'bg-indigo-500' },
  { id: 'text', icon: Type, name: 'Case Converter', description: 'Convert text between cases', color: 'bg-sky-500' },
  { id: 'utilities', icon: Ruler, name: 'Unit Converter', description: 'Convert length, weight, temperature', color: 'bg-emerald-500' },
  { id: 'calculators', icon: Sigma, name: 'Calculator', description: 'Basic arithmetic calculator', color: 'bg-slate-700' }
];

export const toolCategories = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'ai', name: 'AI Workspace', icon: Bot },
  { id: 'text', name: 'Text Tools', icon: Type },
  { id: 'utilities', name: 'Utilities', icon: Ruler },
  { id: 'calculators', name: 'Calculators', icon: Sigma }
];

export const sectionDetails = {
  ai: {
    title: 'AI Workspace',
    description: 'Kickstart ideas with prompts, summaries, and quick drafts built for everyday tasks.',
    highlights: [
      { title: 'Prompt Library', detail: 'Reusable prompts for brainstorming, drafting, and polishing.' },
      { title: 'Instant Summaries', detail: 'Condense notes, articles, or meeting minutes fast.' },
      { title: 'Workflow Boosters', detail: 'Shortcuts that keep you in flow while you build.' }
    ]
  },
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
  }
};
