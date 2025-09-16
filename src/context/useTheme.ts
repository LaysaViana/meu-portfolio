import { useContext } from 'react';
import {
  ThemeContext,
  type ThemeContextType,
} from './ThemeContext/ThemeContext';

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
