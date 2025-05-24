import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

export default function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
}