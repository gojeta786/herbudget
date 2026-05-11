'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

const MOTIVATIONAL_PROMPTS = [
  "Financial independence means...",
  "I want money so I can...",
  "My financial goals are tied to...",
  "Money would give me the freedom to...",
  "When I think about financial security, I feel...",
];

const CORE_VALUES = [
  { icon: '🏠', label: 'Home & Safety', description: 'A place to call my own, secure and stable' },
  { icon: '💪', label: 'Strength', description: 'Not depending on anyone else financially' },
  { icon: '✨', label: 'Options', description: 'Being able to choose, not settle' },
  { icon: '🌟', label: 'Dreams', description: 'Pursuing my passions without monetary stress' },
  { icon: '👨‍👩‍👧', label: 'Family', description: 'Providing for my loved ones' },
  { icon: '🕊️', label: 'Peace', description: 'No more anxiety about money' },
  { icon: '🎓', label: 'Education', description: 'Lifelong learning opportunities' },
  { icon: '🌍', label: 'Adventure', description: 'Travel and experiences that enrich life' },
];

export default function WhyIWantMoneyPage() {
  const [reasons, setReasons] = useState<string[]>([
    'To never feel trapped in a bad situation',
    'To provide my children with opportunities',
    'To retire with dignity and comfort',
  ]);
  const [newReason, setNewReason] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(['Strength', 'Family', 'Peace']);
  const [affirmation, setAffirmation] = useState('');

  const toggleValue = (label: string) => {
    if (selectedValues.includes(label)) {
      setSelectedValues(selectedValues.filter(v => v !== label));
    } else {
      setSelectedValues([...selectedValues, label]);
    }
  };

  const addReason = () => {
    if (newReason.trim()) {
      setReasons([...reasons, newReason.trim()]);
      setNewReason('');
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="page-header">
        <div>
          <h1 className="page-title">Why I Want Money</h1>
          <p className="text-caption" style={{ color: 'var(--color-text-secondary)' }}>
            Your motivations for financial freedom
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-6">
        <div 
          className="rounded-2xl p-6 text-center mb-6"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #8B4B5C 100%)', color: 'white' }}
        >
          <span className="text-4xl mb-4 block">💫</span>
          <h2 className="text-headline mb-2">Your Money Goals Matter</h2>
          <p className="text-body opacity-90">
            Understanding why you want financial freedom helps you stay motivated and make better decisions.
          </p>
        </div>
      </section>

      {/* My Reasons Section */}
      <section className="py-4">
        <h2 className="text-title mb-4">My Reasons</h2>
        <div className="flex flex-col gap-3">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="card flex items-start gap-3"
              style={{ borderLeft: '4px solid var(--color-primary)' }}
            >
              <span className="text-xl">✨</span>
              <p className="text-body flex-1">{reason}</p>
              <button 
                className="text-caption px-2 py-1 rounded"
                style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}
                onClick={() => setReasons(reasons.filter((_, i) => i !== index))}
              >
                ✕
              </button>
            </div>
          ))}
          
          {/* Add New Reason */}
          <div className="card flex gap-2">
            <input
              type="text"
              placeholder="Add your reason..."
              value={newReason}
              onChange={(e) => setNewReason(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addReason()}
              className="flex-1 bg-transparent outline-none text-body"
            />
            <button 
              className="action-button !h-10 !px-4"
              onClick={addReason}
            >
              Add
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-6">
        <h2 className="text-title mb-4">What Money Means to Me</h2>
        <p className="text-caption mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          Select the values that resonate with you
        </p>
        <div className="grid grid-cols-2 gap-3">
          {CORE_VALUES.map((value) => (
            <button
              key={value.label}
              className={`p-4 rounded-xl text-left transition-all ${
                selectedValues.includes(value.label) 
                  ? 'ring-2' 
                  : ''
              }`}
              style={{ 
                background: selectedValues.includes(value.label) 
                  ? 'var(--color-primary)15' 
                  : 'var(--color-surface)',
                
              }}
              onClick={() => toggleValue(value.label)}
            >
              <span className="text-2xl block mb-2">{value.icon}</span>
              <span className="text-label block">{value.label}</span>
              <span className="text-caption block mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                {value.description}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Daily Affirmation Section */}
      <section className="py-6">
        <h2 className="text-title mb-4">Daily Affirmation</h2>
        <div className="card">
          <div 
            className="rounded-xl p-6 text-center mb-4"
            style={{ background: 'var(--color-secondary)20' }}
          >
            <p className="text-title italic" style={{ color: 'var(--color-secondary)' }}>
              "I am worthy of financial abundance. My money goals reflect my value and the impact I want to make in the world."
            </p>
          </div>
          <label className="text-label block mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            Write your own affirmation:
          </label>
          <textarea
            placeholder="I am working toward financial freedom because..."
            value={affirmation}
            onChange={(e) => setAffirmation(e.target.value)}
            className="w-full bg-transparent outline-none text-body resize-none"
            rows={3}
          />
        </div>
      </section>

      {/* Motivational Prompt */}
      <section className="py-6">
        <h2 className="text-title mb-4">Reflection Prompt</h2>
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%)' }}>
          <p className="text-body mb-4">
            Take a moment to think about this:
          </p>
          <p className="text-title mb-4" style={{ color: 'var(--color-primary)' }}>
            {MOTIVATIONAL_PROMPTS[Math.floor(Math.random() * MOTIVATIONAL_PROMPTS.length)]}
          </p>
          <p className="text-caption" style={{ color: 'var(--color-text-secondary)' }}>
            Write your answer in your journal or save it as a note.
          </p>
        </div>
      </section>

      <BottomNav />
    </div>
  );
          }'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';

const MOTIVATIONAL_PROMPTS = [
  "Financial independence means...",
  "I want money so I can...",
  "My financial goals are tied to...",
  "Money would give me the freedom to...",
  "When I think about financial security, I feel...",
];

const CORE_VALUES = [
  { icon: '🏠', label: 'Home & Safety', description: 'A place to call my own, secure and stable' },
  { icon: '💪', label: 'Strength', description: 'Not depending on anyone else financially' },
  { icon: '✨', label: 'Options', description: 'Being able to choose, not settle' },
  { icon: '🌟', label: 'Dreams', description: 'Pursuing my passions without monetary stress' },
  { icon: '👨‍👩‍👧', label: 'Family', description: 'Providing for my loved ones' },
  { icon: '🕊️', label: 'Peace', description: 'No more anxiety about money' },
  { icon: '🎓', label: 'Education', description: 'Lifelong learning opportunities' },
  { icon: '🌍', label: 'Adventure', description: 'Travel and experiences that enrich life' },
];

export default function WhyIWantMoneyPage() {
  const [reasons, setReasons] = useState<string[]>([
    'To never feel trapped in a bad situation',
    'To provide my children with opportunities',
    'To retire with dignity and comfort',
  ]);
  const [newReason, setNewReason] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(['Strength', 'Family', 'Peace']);
  const [affirmation, setAffirmation] = useState('');

  const toggleValue = (label: string) => {
    if (selectedValues.includes(label)) {
      setSelectedValues(selectedValues.filter(v => v !== label));
    } else {
      setSelectedValues([...selectedValues, label]);
    }
  };

  const addReason = () => {
    if (newReason.trim()) {
      setReasons([...reasons, newReason.trim()]);
      setNewReason('');
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="page-header">
        <div>
          <h1 className="page-title">Why I Want Money</h1>
          <p className="text-caption" style={{ color: 'var(--color-text-secondary)' }}>
            Your motivations for financial freedom
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-6">
        <div 
          className="rounded-2xl p-6 text-center mb-6"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #8B4B5C 100%)', color: 'white' }}
        >
          <span className="text-4xl mb-4 block">💫</span>
          <h2 className="text-headline mb-2">Your Money Goals Matter</h2>
          <p className="text-body opacity-90">
            Understanding why you want financial freedom helps you stay motivated and make better decisions.
          </p>
        </div>
      </section>

      {/* My Reasons Section */}
      <section className="py-4">
        <h2 className="text-title mb-4">My Reasons</h2>
        <div className="flex flex-col gap-3">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="card flex items-start gap-3"
              style={{ borderLeft: '4px solid var(--color-primary)' }}
            >
              <span className="text-xl">✨</span>
              <p className="text-body flex-1">{reason}</p>
              <button 
                className="text-caption px-2 py-1 rounded"
                style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}
                onClick={() => setReasons(reasons.filter((_, i) => i !== index))}
              >
                ✕
              </button>
            </div>
          ))}
          
          {/* Add New Reason */}
          <div className="card flex gap-2">
            <input
              type="text"
              placeholder="Add your reason..."
              value={newReason}
              onChange={(e) => setNewReason(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addReason()}
              className="flex-1 bg-transparent outline-none text-body"
            />
            <button 
              className="action-button !h-10 !px-4"
              onClick={addReason}
            >
              Add
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-6">
        <h2 className="text-title mb-4">What Money Means to Me</h2>
        <p className="text-caption mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          Select the values that resonate with you
        </p>
        <div className="grid grid-cols-2 gap-3">
          {CORE_VALUES.map((value) => (
            <button
              key={value.label}
              className={`p-4 rounded-xl text-left transition-all ${
                selectedValues.includes(value.label) 
                  ? 'ring-2' 
                  : ''
              }`}
              style={{ 
                background: selectedValues.includes(value.label) 
                  ? 'var(--color-primary)15' 
                  : 'var(--color-surface)',
                
              }}
              onClick={() => toggleValue(value.label)}
            >
              <span className="text-2xl block mb-2">{value.icon}</span>
              <span className="text-label block">{value.label}</span>
              <span className="text-caption block mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                {value.description}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Daily Affirmation Section */}
      <section className="py-6">
        <h2 className="text-title mb-4">Daily Affirmation</h2>
        <div className="card">
          <div 
            className="rounded-xl p-6 text-center mb-4"
            style={{ background: 'var(--color-secondary)20' }}
          >
            <p className="text-title italic" style={{ color: 'var(--color-secondary)' }}>
              "I am worthy of financial abundance. My money goals reflect my value and the impact I want to make in the world."
            </p>
          </div>
          <label className="text-label block mb-2" style={{ color: 'var(--color-text-secondary)' }}>
            Write your own affirmation:
          </label>
          <textarea
            placeholder="I am working toward financial freedom because..."
            value={affirmation}
            onChange={(e) => setAffirmation(e.target.value)}
            className="w-full bg-transparent outline-none text-body resize-none"
            rows={3}
          />
        </div>
      </section>

      {/* Motivational Prompt */}
      <section className="py-6">
        <h2 className="text-title mb-4">Reflection Prompt</h2>
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%)' }}>
          <p className="text-body mb-4">
            Take a moment to think about this:
          </p>
          <p className="text-title mb-4" style={{ color: 'var(--color-primary)' }}>
            {MOTIVATIONAL_PROMPTS[Math.floor(Math.random() * MOTIVATIONAL_PROMPTS.length)]}
          </p>
          <p className="text-caption" style={{ color: 'var(--color-text-secondary)' }}>
            Write your answer in your journal or save it as a note.
          </p>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
