import type { Theme } from '../types/theme';

export const oceanTheme: Theme = {
  id: 'ocean',
  name: 'Océan',
  mode: 'dark',
  colors: {
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    accent: '#14b8a6',
    background: '#0c4a6e',
    surface: '#075985',
    text: '#f0f9ff',
    textSecondary: '#bae6fd',
    border: '#0369a1',
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#06b6d4',
  },
};

export const sunsetTheme: Theme = {
  id: 'sunset',
  name: 'Coucher de soleil',
  mode: 'dark',
  colors: {
    primary: '#f97316',
    secondary: '#fb923c',
    accent: '#fbbf24',
    background: '#7c2d12',
    surface: '#9a3412',
    text: '#fff7ed',
    textSecondary: '#fed7aa',
    border: '#c2410c',
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#06b6d4',
  },
};

export const forestTheme: Theme = {
  id: 'forest',
  name: 'Forêt',
  mode: 'dark',
  colors: {
    primary: '#22c55e',
    secondary: '#16a34a',
    accent: '#84cc16',
    background: '#14532d',
    surface: '#166534',
    text: '#f0fdf4',
    textSecondary: '#bbf7d0',
    border: '#15803d',
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#06b6d4',
  },
};

export const customThemes = [oceanTheme, sunsetTheme, forestTheme];