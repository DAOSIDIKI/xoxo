import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import {WINNING_COMBINATIONS}  from "./winning-combinations"
import GameOver from "./components/GameOver";
import { useState } from "react"
function deriveState(gameTurns){
  let current="X";
  if(gameTurns.length && gameTurns[0].player=="X")
    current="O";
  return current;
}
export default function(){
  const [gameTurns,setGameTurns]=useState([]);
  const [players, setPlayers]=useState({
    'X':"Player 1",
    "O":"Player 2"
  })
  const current=deriveState(gameTurns);
  const gameboard=[[null,null,null],[null,null,null],[null,null,null]];
    for(let turn of gameTurns){
         gameboard[turn.state.row][turn.state.col]=turn.player;
  }
  let winner;
  for(let obj of WINNING_COMBINATIONS){
    let first=gameboard[obj[0].row][obj[0].column];
    let second=gameboard[obj[1].row][obj[1].column];
    let third=gameboard[obj[2].row][obj[2].column];
    if(first && first==second && first==third)
      winner=players[first];
  }
  const hasdraw=!winner && gameTurns.length>=9;
  function changePlayerSymbol(row,index){
        setGameTurns(prev => {
          const current=deriveState(prev);
          const upGameTurns=[{state:{row:row,col:index},player:current},...gameTurns];
          return upGameTurns;
        });
  }
  function Restart(){
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol,newName){
    setPlayers(prev => {return {...prev,[symbol]:newName}})
  }
  return (
    <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name={players.X} PlayerSymbol="X" isActive={current=="X"} changePlayerName={handlePlayerNameChange}/>
        <Player name={players.O} PlayerSymbol="O" isActive={current=="O"} changePlayerName={handlePlayerNameChange}/>
      </ol>
      {(winner || hasdraw) && <GameOver winner={winner} Restart={Restart}/>}
      <GameBoard PlayerSymbol={current} changePlayerSymbol={changePlayerSymbol} turns={gameboard}/>
    </div>
    <Log turns={gameTurns} />
    </main>
  )
}
