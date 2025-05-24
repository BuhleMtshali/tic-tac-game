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
  return (
    <>
    
    </>
  )
}

export default App
