import React, { createContext, useState } from 'react';
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [go, setGo] = useState('marshmallow');
  const [scores, setScores] = useState({ marshmallow: 0, strawberry: 0 });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setCells(Array(9).fill(''));
    setGo('marshmallow');
    setWinner(null);
  };

  return (
    <GameContext.Provider value={{ cells, setCells, go, setGo, scores, setScores, winner, setWinner, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};