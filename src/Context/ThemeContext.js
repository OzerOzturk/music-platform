import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const themes = {
  dark: {
    backgroundColor: ' #181D48',
    color: 'white'
  },
  white: {
    backgroundColor: '#FFFF',
    color: 'black'
  }
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.white;

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true';
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};
