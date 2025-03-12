import React from 'react'

const GameOver = ({winner,Restart}) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner? <p>{winner} won!</p>: <p>It is a draw</p>}
      <button onClick={Restart}>Rematch</button>
    </div>
  )
}

export default GameOver
