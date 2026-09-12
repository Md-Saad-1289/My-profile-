import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Theme } from '../types';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'dark', label: 'Dark', icon: <Moon className="w-3.5 h-3.5" /> },
    { value: 'light', label: 'Light', icon: <Sun className="w-3.5 h-3.5" /> },
    { value: 'system', label: 'System', icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
        className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-200 hover:text-white hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-emerald-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 py-1 bg-neutral-900 border border-neutral-700 rounded-xl shadow-xl shadow-black/40 z-50 animate-in fade-in zoom-in-95 duration-150">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setTheme(opt.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs font-semibold text-left transition-colors cursor-pointer ${
                theme === opt.value
                  ? 'text-emerald-300 bg-emerald-500/15 font-bold'
                  : 'text-neutral-200 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
              {theme === opt.value && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
