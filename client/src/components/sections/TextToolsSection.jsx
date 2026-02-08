import React, { useMemo, useState } from 'react';
import ToolCard from '../Tool/ToolCard';

const toTitleCase = (value) =>
  value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(' ');

const toSentenceCase = (value) => {
  if (!value) return '';
  const trimmed = value.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

const toSnakeCase = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '_');

const TextToolsSection = () => {
  const [textInput, setTextInput] = useState('');
  const [caseInput, setCaseInput] = useState('');
  const [caseOutput, setCaseOutput] = useState('');
  const [cleanerInput, setCleanerInput] = useState('');

  const wordStats = useMemo(() => {
    const trimmed = textInput.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const characters = textInput.length;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(Boolean).length : 0;
    const readingTime = words ? Math.max(1, Math.ceil(words / 200)) : 0;
    return { words, characters, sentences, readingTime };
  }, [textInput]);

  const handleCaseConvert = (type) => {
    let output = caseInput;
    switch (type) {
      case 'upper':
        output = caseInput.toUpperCase();
        break;
      case 'lower':
        output = caseInput.toLowerCase();
        break;
      case 'title':
        output = toTitleCase(caseInput);
        break;
      case 'sentence':
        output = toSentenceCase(caseInput);
        break;
      case 'snake':
        output = toSnakeCase(caseInput);
        break;
      default:
        break;
    }
    setCaseOutput(output);
  };

  const handleCleanText = () => {
    const cleaned = cleanerInput
      .replace(/\s+/g, ' ')
      .replace(/\s*\n\s*/g, '\n')
      .trim();
    setCleanerInput(cleaned);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <ToolCard title="Word Counter" description="Measure words, characters, and readability.">
        <textarea
          className="input-field min-h-[140px]"
          placeholder="Paste or type your text here"
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Words', value: wordStats.words },
            { label: 'Characters', value: wordStats.characters },
            { label: 'Sentences', value: wordStats.sentences },
            { label: 'Reading Time', value: wordStats.readingTime ? `${wordStats.readingTime} min` : '—' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 px-4 py-3"
            >
              <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </ToolCard>

      <ToolCard title="Case Converter" description="Switch between common text cases.">
        <textarea
          className="input-field min-h-[120px]"
          placeholder="Enter text to convert"
          value={caseInput}
          onChange={(event) => setCaseInput(event.target.value)}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { label: 'Uppercase', type: 'upper' },
            { label: 'Lowercase', type: 'lower' },
            { label: 'Title Case', type: 'title' },
            { label: 'Sentence Case', type: 'sentence' },
            { label: 'Snake Case', type: 'snake' }
          ].map((option) => (
            <button
              key={option.type}
              type="button"
              onClick={() => handleCaseConvert(option.type)}
              className="btn-secondary"
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="case-output">
            Output
          </label>
          <textarea
            id="case-output"
            className="input-field mt-2 min-h-[100px]"
            value={caseOutput}
            readOnly
            placeholder="Converted text will appear here"
          />
        </div>
      </ToolCard>

      <ToolCard title="Text Cleaner" description="Remove extra spaces and tidy formatting.">
        <textarea
          className="input-field min-h-[120px]"
          placeholder="Paste messy text"
          value={cleanerInput}
          onChange={(event) => setCleanerInput(event.target.value)}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={handleCleanText} className="btn-primary">
            Clean Text
          </button>
          <button type="button" onClick={() => setCleanerInput('')} className="btn-secondary">
            Clear
          </button>
        </div>
      </ToolCard>
    </div>
  );
};

export default TextToolsSection;
