import { lightTheme } from './light';
import { darkTheme } from './dark';
import { customThemes } from './custom';
import type { Theme } from '../types/theme';

export const defaultThemes: Theme[] = [lightTheme, darkTheme, ...customThemes];

export const getThemeById = (id: string): Theme | undefined => {
  return defaultThemes.find((theme) => theme.id === id);
};

export { lightTheme, darkTheme };