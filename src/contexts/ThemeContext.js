import React, { createContext } from 'react'

// const windowGlobal = typeof window !== 'undefined' && window;


const defaultState = {
  isLightTheme: true,
  light: { color: 'white', font: 'black' },
  dark: { color: '#505050', font: '#b3b9c5' }
};

export const ThemeContext = createContext(defaultState);

// const ThemeContextProvider = (props) => {
//   const [themes, setTheme] = useState(() => {
//     if (windowGlobal.localStorage.themes !== undefined) {
//       const localData = windowGlobal.localStorage.getItem('themes');
//       return localData ? JSON.parse(localData) : defaultState;
//     } else {
//       return defaultState
//     }
//   });
//   const toggleTheme = () => {
//     setTheme({ isLightTheme: !themes.isLightTheme, light: { color: 'white', font: 'black' }, dark: { color: '#505050', font: '#b3b9c5' } });
//   };
//   useEffect(() => {
//     windowGlobal.localStorage.setItem('themes', JSON.stringify(themes));
//   }, [themes]);
//   return (  
//     <ThemeContext.Provider value={{themes, toggleTheme}}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }

class ThemeContextProvider extends React.Component {
  state = defaultState;

  componentDidMount() {
    const localData = localStorage.getItem('themes');
    if (localData) {
      this.setState(JSON.parse(localData));
    }
  } 

  // componentDidUpdate(prevState) {
  //   const { isLightTheme } = this.state
  //   if (prevState.isLightTheme !== isLightTheme) {
  //     localStorage.setItem('theme', JSON.stringify(this.state));
  //   }
  // }

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
    localStorage.setItem('theme', JSON.stringify(this.state));
    const { isLightTheme } = this.state
    if (prevState.isLightTheme !== isLightTheme) {
      localStorage.setItem('theme', JSON.stringify(this.state))
    }
  }

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

 
export default ThemeContextProvider;


