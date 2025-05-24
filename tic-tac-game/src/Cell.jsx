import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--cellBg, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--cellHover, #f0f0f0);
  }
`;

export default function Cell({ cell, onClick }) {
  let symbol;
  if (cell === 'marshmallow') {
    symbol = '🍡';
  } else if (cell === 'strawberry') {
    symbol = '🍓';
  } else {
    symbol = '';
  }

  return (
    <StyledCell onClick={onClick}>
      {symbol}
    </StyledCell>
  );
}
