import { CalendarCheck, FileText, Home, Ruler, Timer, Type } from 'lucide-react';

export const homeTools = [
  { id: 'planning', icon: CalendarCheck, name: 'Daily Planner', description: 'Plan tasks, priorities, and wins', color: 'bg-slate-900' },
  { id: 'planning', icon: Timer, name: 'Focus Timer', description: 'Stay on track with timed sessions', color: 'bg-indigo-500' },
  { id: 'text', icon: FileText, name: 'Word Counter', description: 'Count words, characters, and more', color: 'bg-sky-500' },
  { id: 'text', icon: Type, name: 'Case Converter', description: 'Convert text between cases', color: 'bg-emerald-500' },
  { id: 'utilities', icon: Ruler, name: 'Unit Converter', description: 'Convert length, weight, temperature', color: 'bg-slate-700' }
];

export const toolCategories = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'planning', name: 'Planning', icon: CalendarCheck },
  { id: 'text', name: 'Text Tools', icon: Type },
  { id: 'utilities', name: 'Utilities', icon: Ruler }
];

export const sectionDetails = {
  planning: {
    title: 'Planning',
    description: 'Stay focused with daily planning, habit tracking, and time blocks.',
    highlights: [
      { title: 'Daily Planner', detail: 'Capture priorities, to-dos, and wins in one view.' },
      { title: 'Focus Timer', detail: 'Use quick sessions to keep momentum.' },
      { title: 'Notes Hub', detail: 'Collect ideas and next steps in a single place.' }
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
  }
};
