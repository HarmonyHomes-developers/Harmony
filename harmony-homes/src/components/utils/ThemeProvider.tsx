'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Check if the user has previously set a theme preference
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set initial theme
      const initialTheme: Theme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
      setTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    // Update document with current theme
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      
      // Update CSS variables for the current theme
      const root = document.documentElement;
      if (theme === 'dark') {
        root.style.setProperty('--background', '#121212');
        root.style.setProperty('--foreground', '#f5f5f5');
        root.style.setProperty('--secondary', '#1f2937');
      } else {
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#171717');
        root.style.setProperty('--secondary', '#f3f4f6');
      }
      
      // Save theme preference
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prevTheme: Theme) => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeToggle(): React.ReactElement {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary hover:bg-secondary-hover transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-foreground" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </button>
  );
} 