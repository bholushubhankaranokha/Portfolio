import { useEffect, useState } from 'react';
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const urlTheme = new URLSearchParams(window.location.search).get('theme');
      if (urlTheme === 'light' || urlTheme === 'dark') return urlTheme;
      return localStorage.getItem('bholu-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    catch { return 'light'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('bholu-theme', theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme(current => current === 'light' ? 'dark' : 'light')];
}
