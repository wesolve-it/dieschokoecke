import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
};

const systemPrefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1B1411' : '#FDFCFB');
  }, [theme]);

  // Systemwechsel übernehmen, solange keine eigene Wahl gespeichert ist
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (!readStored()) setTheme(systemPrefersDark() ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 350);
    }
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {}
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
