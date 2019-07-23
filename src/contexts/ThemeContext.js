import React, { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext();

const defaultState = {
  isLightTheme: true,
  light: { color: 'white', font: 'black' },
  dark: { color: '#505050', font: '#b3b9c5' }
};

const ThemeContextProvider = (props) => {
  const [themes, setTheme] = useState(() => {
    const localData = localStorage.getItem('themes');
    return localData ? JSON.parse(localData) : defaultState;
  });
  const toggleTheme = () => {
    setTheme({ isLightTheme: !themes.isLightTheme, light: { color: 'white', font: 'black' }, dark: { color: '#505050', font: '#b3b9c5' } });
  };
  useEffect(() => {
    localStorage.setItem('themes', JSON.stringify(themes));
  }, [themes]);
  return (  
    <ThemeContext.Provider value={{themes, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeContextProvider;

