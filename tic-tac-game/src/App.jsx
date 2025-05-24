import React, { useEffect, useState } from 'react';
import Restart from "./assets/refresh.png";
import Cell from './Cell';
import './App.css'

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("marshmallow");
  const [winningMsg, setWinningMsg] = useState(null);
  const [rainIntervalid, setRainIntervalid] = useState(null);
  const message = "it is now" + go + "'s go.";

  useState(() => {
    checkScore();
  }, [cells]);

  useEffect(() => {
    if(winningMsg){
      startTransition();
    }
  }, [winningMsg]);

  const handleRestartGame = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("marshmallow");
    setWinningMsg(null);
    if(rainIntervalid){
      clearInterval(rainIntervalid);
      setRainIntervalid(null)
    }
  }

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let winnwerFound = false;

    winningCombos.forEach((array) => {
      let marshmallowWins = array.every(
        (cell) => cells[cell] === "marshmallow"
      );
      if(marshmallowWins){
        setWinningMsg("Marshmallow Wins!");
        winnwerFound = true;
        return
      }
    });

    winningCombos.forEach((array) => {
      let strawberryWins = array.every((cell) => cells[cell] === "strawberry");
      if(strawberryWins){
        setWinningMsg(strawberryWins)
          setWinningMsg("Strawberry Wins");
          winnwerFound = true;
          return
      }
    });

    if (!winnwerFound && cells.every((cell) => cell !== "")) {
      setWinningMsg("It's a Draw!");
    }
  }

   const makeRain = () => {
    const rain = document.createElement("div");
    rain.classList.add("makeRain");

    rain.style.left = Math.random() * 100 + "vw";
    rain.style.animationDuration = Math.random() * 2 + 3 + "s";
    if (winningMsg === "Strawberry Wins!") {
      rain.innerText = '🍓'
    } else if (winningMsg === "Marshmallow Wins!") {
      rain.innerText = "🍡"
    } else {
      rain.innerText = "😶"; // Default or draw condition
    }

    document.body.appendChild(rain);

    setTimeout(() => {
      rain.remove();
    }, 5000);
  };

  const startRain = () => {
    const intervalId = setInterval(makeRain, 300);
    setRainIntervalid(intervalId);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  };

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMsg={winningMsg}
          />
        ))}
      </div>
      <p className="message">
        {winningMsg || message}
        <img
          src={restart}
          className="restartIcon"
          alt="restart"
          onClick={handleRestartGame}
        />
      </p>
    </div>
  )
}

export default App
