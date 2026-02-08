import React, { useMemo, useState } from 'react';
import ToolCard from '../Tool/ToolCard';

const unitSets = {
  length: [
    { label: 'Meters', value: 'm', factor: 1 },
    { label: 'Kilometers', value: 'km', factor: 1000 },
    { label: 'Feet', value: 'ft', factor: 0.3048 },
    { label: 'Miles', value: 'mi', factor: 1609.344 }
  ],
  weight: [
    { label: 'Kilograms', value: 'kg', factor: 1 },
    { label: 'Grams', value: 'g', factor: 0.001 },
    { label: 'Pounds', value: 'lb', factor: 0.453592 }
  ],
  temperature: [
    { label: 'Celsius', value: 'c' },
    { label: 'Fahrenheit', value: 'f' },
    { label: 'Kelvin', value: 'k' }
  ]
};

const convertTemperature = (value, fromUnit, toUnit) => {
  if (Number.isNaN(value)) return '';
  let celsius = value;
  if (fromUnit === 'f') celsius = ((value - 32) * 5) / 9;
  if (fromUnit === 'k') celsius = value - 273.15;
  if (toUnit === 'c') return celsius;
  if (toUnit === 'f') return (celsius * 9) / 5 + 32;
  if (toUnit === 'k') return celsius + 273.15;
  return value;
};

const formatNumber = (value) => {
  if (value === '' || Number.isNaN(value)) return '';
  return Number(value.toFixed(4)).toString();
};

const UtilitiesSection = () => {
  const [category, setCategory] = useState('length');
  const [amount, setAmount] = useState('1');
  const [fromUnit, setFromUnit] = useState(unitSets.length[0].value);
  const [toUnit, setToUnit] = useState(unitSets.length[1].value);
  const [lookupQuery, setLookupQuery] = useState('');
  const [timeInput, setTimeInput] = useState('09:00');
  const [timeOffset, setTimeOffset] = useState('90');

  const units = unitSets[category];

  const conversion = useMemo(() => {
    const numericValue = Number(amount);
    if (Number.isNaN(numericValue)) return '';
    if (category === 'temperature') {
      return convertTemperature(numericValue, fromUnit, toUnit);
    }

    const fromFactor = units.find((unit) => unit.value === fromUnit)?.factor ?? 1;
    const toFactor = units.find((unit) => unit.value === toUnit)?.factor ?? 1;
    return (numericValue * fromFactor) / toFactor;
  }, [amount, category, fromUnit, toUnit, units]);

  const handleCategoryChange = (nextCategory) => {
    const nextUnits = unitSets[nextCategory];
    setCategory(nextCategory);
    setFromUnit(nextUnits[0].value);
    setToUnit(nextUnits[1].value ?? nextUnits[0].value);
  };

  const formulas = [
    { label: 'Area of a circle', value: 'A = πr²' },
    { label: 'Area of a triangle', value: 'A = ½bh' },
    { label: 'Simple interest', value: 'I = P × R × T' },
    { label: 'Speed', value: 'Speed = Distance / Time' },
    { label: 'Fuel efficiency', value: 'MPG = Miles / Gallons' },
    { label: 'Percent change', value: '(New - Old) / Old × 100' }
  ];

  const filteredFormulas = formulas.filter((formula) =>
    formula.label.toLowerCase().includes(lookupQuery.toLowerCase())
  );

  const timeResult = useMemo(() => {
    if (!timeInput) return '';
    const [hours, minutes] = timeInput.split(':').map((value) => Number(value));
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return '';
    const offsetMinutes = Number(timeOffset);
    if (Number.isNaN(offsetMinutes)) return '';
    const totalMinutes = hours * 60 + minutes + offsetMinutes;
    const normalized = (totalMinutes + 24 * 60) % (24 * 60);
    const resultHours = Math.floor(normalized / 60);
    const resultMinutes = normalized % 60;
    return `${resultHours.toString().padStart(2, '0')}:${resultMinutes.toString().padStart(2, '0')}`;
  }, [timeInput, timeOffset]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <ToolCard title="Unit Converter" description="Convert length, weight, and temperature units.">
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Length', value: 'length' },
            { label: 'Weight', value: 'weight' },
            { label: 'Temperature', value: 'temperature' }
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleCategoryChange(option.value)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === option.value
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[2fr,1fr,1fr] items-end">
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="unit-amount">
              Amount
            </label>
            <input
              id="unit-amount"
              className="input-field mt-2"
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="from-unit">
              From
            </label>
            <select
              id="from-unit"
              className="input-field mt-2"
              value={fromUnit}
              onChange={(event) => setFromUnit(event.target.value)}
            >
              {units.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="to-unit">
              To
            </label>
            <select
              id="to-unit"
              className="input-field mt-2"
              value={toUnit}
              onChange={(event) => setToUnit(event.target.value)}
            >
              {units.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 px-6 py-4">
          <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Result</div>
          <div className="text-2xl font-semibold text-slate-900 dark:text-white">
            {formatNumber(conversion) || '—'}
          </div>
        </div>
      </ToolCard>

      <ToolCard title="Quick Lookup" description="Keep common formulas and references close.">
        <input
          className="input-field"
          placeholder="Search formulas or references"
          value={lookupQuery}
          onChange={(event) => setLookupQuery(event.target.value)}
          type="text"
        />
        <div className="mt-4 space-y-2">
          {filteredFormulas.map((formula) => (
            <div
              key={formula.label}
              className="rounded-xl border border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/70 px-4 py-3"
            >
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{formula.label}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{formula.value}</div>
            </div>
          ))}
          {!filteredFormulas.length && (
            <div className="text-sm text-slate-500 dark:text-slate-400">
              No matches yet. Try another keyword.
            </div>
          )}
        </div>
      </ToolCard>

      <ToolCard title="Time Helpers" description="Add or subtract minutes from a time quickly.">
        <div className="grid gap-4 md:grid-cols-[1fr,1fr,1fr] items-end">
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="time-input">
              Start time
            </label>
            <input
              id="time-input"
              className="input-field mt-2"
              type="time"
              value={timeInput}
              onChange={(event) => setTimeInput(event.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="time-offset">
              Offset minutes
            </label>
            <input
              id="time-offset"
              className="input-field mt-2"
              type="number"
              value={timeOffset}
              onChange={(event) => setTimeOffset(event.target.value)}
            />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-300">Result</div>
            <div className="mt-2 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 px-4 py-3 text-lg font-semibold text-slate-900 dark:text-white">
              {timeResult || '—'}
            </div>
          </div>
        </div>
      </ToolCard>
    </div>
  );
};

export default UtilitiesSection;
