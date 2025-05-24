import React, { createContext, useState } from 'react';
import themes from '../theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');
  const toggleTheme = () => setThemeName(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


// theme.js
export default {
  light: {
    bg: '#fff',
    text: '#000',
    boardBg: 'rgb(92,51,22)'  
  },
  dark: {
    bg: '#333',
    text: '#f5f5f5',
    boardBg: '#553'
  }
};