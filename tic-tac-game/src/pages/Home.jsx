import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  text-align:center;
`;

export default function Home() {
  const nav = useNavigate();
  return (
    <Container>
      <h1>Welcome to Tic Tac Toe</h1>
      <Button onClick={() => nav('/game')}>Start New Game</Button>
      <Button onClick={() => alert('Mark X or O. First to 3 in a row wins!')}>Instructions</Button>
    </Container>
  );
}