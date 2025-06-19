import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, () => setTheme(theme === 'light' ? 'dark' : 'light')];
}
