import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import styled from 'styled-components';
import Cell from '../Cell';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useGameSounds } from '../hooks/useSound';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';

const Board = styled.div`
  width:90vw; max-width:300px; display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:5px; background:var(--boardBg);
  padding:5px; border-radius:0.5rem;
`;

export default function Game() {
  const { cells, setCells, go, setGo, scores, setScores, winner, setWinner, resetGame } = useContext(GameContext);
  const { playClick, playWin } = useGameSounds();
  const modal = useModal();

  useEffect(() => {
    if (winner) {
      playWin();
      setScores(prev => ({ ...prev, [winner.toLowerCase()]: prev[winner.toLowerCase()] + 1 }));
      modal.open();
    }
  }, [winner]);

  const handleCell = i => {
    if (!cells[i] && !winner) {
      playClick();
      const next = [...cells]; next[i] = go;
      setCells(next);
      setGo(go === 'marshmallow' ? 'strawberry' : 'marshmallow');
      // check winner logic...
    }
  };

  return (
    <>  
      <ThemeSwitcher />
      <Board>
        {cells.map((c,i) => <Cell key={i} cell={c} onClick={() => handleCell(i)} />)}
      </Board>
      <p>Score - Marshmallow: {scores.marshmallow} | Strawberry: {scores.strawberry}</p>
      <Button onClick={resetGame}>Reset</Button>

      <Modal isOpen={modal.isOpen} onClose={() => { modal.close(); resetGame(); }}>
        <h2>{winner} Wins!</h2>
        <Button onClick={() => { modal.close(); resetGame(); }}>Play Again</Button>
      </Modal>
    </>
  );
}