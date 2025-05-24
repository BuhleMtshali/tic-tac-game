import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GameProvider } from './context/GameContext';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>                        
    <ThemeContext.Consumer>              
      {({ theme }) => (
        <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          <GameProvider>                  
            <App />
          </GameProvider>
        </StyledThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
  </StrictMode>,
)
