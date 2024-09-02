import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div>Current theme: {theme}</div>
    </div>
  );
}
