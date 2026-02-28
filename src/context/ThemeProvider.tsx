import { useState, useEffect, useMemo, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import { useSystemTheme } from '../hooks/useSystemTheme';
import { defaultThemes, lightTheme, darkTheme } from '../themes';
import type { ThemeProviderProps, ThemeMode, Theme, ThemeColors } from '../types/theme';

const THEME_STORAGE_KEY = 'app-theme-id';
const MODE_STORAGE_KEY = 'app-theme-mode';

export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  defaultMode = 'system',
}: ThemeProviderProps) => {
  const systemTheme = useSystemTheme();

  const [themeId, setThemeId] = useState<string>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved || defaultTheme;
  });

  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(MODE_STORAGE_KEY);
    return (saved as ThemeMode) || defaultMode;
  });

  const [customColors, setCustomColors] = useState<Partial<ThemeColors> | null>(null);

  // Get active theme based on mode
  const activeTheme = useMemo<Theme>(() => {
    let baseTheme: Theme;

    if (themeMode === 'system') {
      baseTheme = systemTheme === 'dark' ? darkTheme : lightTheme;
    } else {
      const foundTheme = defaultThemes.find((t) => t.id === themeId);
      baseTheme = foundTheme || lightTheme;
    }

    // Apply custom colors if any
    if (customColors) {
      return {
        ...baseTheme,
        colors: {
          ...baseTheme.colors,
          ...customColors,
        },
      };
    }

    return baseTheme;
  }, [themeId, themeMode, systemTheme, customColors]);

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(activeTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Update class for dark mode
    if (activeTheme.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [activeTheme]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  }, [themeId]);

  useEffect(() => {
    localStorage.setItem(MODE_STORAGE_KEY, themeMode);
  }, [themeMode]);

  const setTheme = useCallback((newThemeId: string) => {
    setThemeId(newThemeId);
    setCustomColors(null);
  }, []);

  const handleSetThemeMode = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
  }, []);

  const customizeTheme = useCallback((colors: Partial<ThemeColors>) => {
    setCustomColors((prev) => ({
      ...prev,
      ...colors,
    }));
  }, []);

  const resetTheme = useCallback(() => {
    setCustomColors(null);
    setThemeId(defaultTheme);
    setThemeMode(defaultMode);
  }, [defaultTheme, defaultMode]);

  const value = useMemo(
    () => ({
      theme: activeTheme,
      themeMode,
      availableThemes: defaultThemes,
      setTheme,
      setThemeMode: handleSetThemeMode,
      customizeTheme,
      resetTheme,
    }),
    [activeTheme, themeMode, setTheme, handleSetThemeMode, customizeTheme, resetTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};