import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.bg};
    --text: ${({ theme }) => theme.text};
    --boardBg: ${({ theme }) => theme.boardBg};
  }
  body {
    margin: 0;
    font-family: sans-serif;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s;
  }
`;

export default GlobalStyles;