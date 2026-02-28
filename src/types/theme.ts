// Types pour le système de thème - AUCUN ANY

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  info: string;
}

export interface Theme {
  id: string;
  name: string;
  mode: 'light' | 'dark';
  colors: ThemeColors;
}

export interface ThemeContextValue {
  theme: Theme;
  themeMode: ThemeMode;
  availableThemes: Theme[];
  setTheme: (themeId: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
  customizeTheme: (colors: Partial<ThemeColors>) => void;
  resetTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  defaultMode?: ThemeMode;
}