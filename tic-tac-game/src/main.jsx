import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { GameProvider } from './context/GameContext';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <GameProvider>
        <GlobalStyles />
        <App />
      </GameProvider>
    </ThemeProvider>
   
  </StrictMode>,
)
