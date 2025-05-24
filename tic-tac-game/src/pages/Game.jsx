import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import styled from 'styled-components';
import Cell from '../Cell';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useGameSounds } from '../hooks/useSound';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Board = styled.div`
  width: 90vw;
  max-width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  background: var(--boardBg);
  padding: 5px;
  border-radius: 0.5rem;
`;

const Score = styled.p`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
  background-color: #ff69b4;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1493;
  }
`;

export default function Game() {
  const { cells, setCells, go, setGo, scores, setScores, winner, setWinner, resetGame } = useContext(GameContext);
  const { playClick, playWin } = useGameSounds();
  const modal = useModal();

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6],           // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  useEffect(() => {
    if (winner) {
      playWin();
      setScores(prev => ({
        ...prev,
        [winner.toLowerCase()]: prev[winner.toLowerCase()] + 1,
      }));
      modal.open();
    }
  }, [winner]);

  const handleCell = (i) => {
    if (!cells[i] && !winner) {
      playClick();
      const next = [...cells];
      next[i] = go;
      setCells(next);

      const win = checkWinner(next);
      if (win) {
        setWinner(win);
      } else {
        setGo(go === 'marshmallow' ? 'strawberry' : 'marshmallow');
      }
    }
  };

  return (
    <Wrapper>
      <ThemeSwitcher />
      <Board>
        {cells.map((c, i) => (
          <Cell key={i} cell={c} onClick={() => handleCell(i)} />
        ))}
      </Board>

      <Score>
        Score — Marshmallow: {scores.marshmallow} | Strawberry: {scores.strawberry}
      </Score>

      <StyledButton onClick={() => { modal.close(); resetGame(); }}>
        Reset Game
      </StyledButton>

      <Modal isOpen={modal.isOpen} onClose={() => { modal.close(); resetGame(); }}>
        <h2>{winner} Wins!</h2>
        <StyledButton onClick={() => { modal.close(); resetGame(); }}>
          Play Again
        </StyledButton>
      </Modal>
    </Wrapper>
  );
}
