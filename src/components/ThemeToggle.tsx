import { useTheme } from '../context/useTheme';

export const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  const modes: Array<{ value: typeof themeMode; icon: string; label: string }> = [
    { value: 'light', icon: '☀️', label: 'Clair' },
    { value: 'dark', icon: '🌙', label: 'Sombre' },
    { value: 'system', icon: '💻', label: 'Système' },
  ];

  return (
    <div className="flex gap-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-lg">
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => setThemeMode(mode.value)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            themeMode === mode.value
              ? 'bg-white dark:bg-gray-600 shadow-md scale-105'
              : 'hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          style={{
            color: themeMode === mode.value ? 'var(--color-primary)' : 'var(--color-text)',
          }}
        >
          <span className="mr-2">{mode.icon}</span>
          {mode.label}
        </button>
      ))}
    </div>
  );
};