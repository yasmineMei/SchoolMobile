import { useColorScheme } from 'react-native';

const light = {
  bg: '#f5f7f7',
  card: '#ffffff',
  text: '#0f1f1f',
  muted: '#6b7b7b',
  border: '#dbe3e3',
  primary: '#0d9488',
  onPrimary: '#ffffff',
  danger: '#dc2626',
  success: '#16a34a',
  warning: '#d97706',
};

const dark: typeof light = {
  bg: '#0b1414',
  card: '#142121',
  text: '#e8f1f1',
  muted: '#8ea3a3',
  border: '#233535',
  primary: '#14b8a6',
  onPrimary: '#06201d',
  danger: '#f87171',
  success: '#4ade80',
  warning: '#fbbf24',
};

export type Theme = typeof light;

export function useTheme(): Theme {
  return useColorScheme() === 'dark' ? dark : light;
}
