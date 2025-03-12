import React, { useState } from 'react'

const GameBoard = ({changePlayerSymbol,turns}) => {
    // const [gameboard,setGameBoard]=useState(array);
    // function handleClick(row,col){
    //     setGameBoard(prev => {
    //         let current=[...prev.map(item => [...item])];
    //         current[row][col]=PlayerSymbol;
    //         return current;
    //     })
    //     changePlayerSymbol();
    // }
  return (
    <ol id='game-board'>
      {
         turns.map((item,index) => <li key={index}>
            <ol>
            {item.map((it,ind)=> <li key={ind}>
                   <button disabled={it? true: false} onClick={changePlayerSymbol.bind(null,index,ind)}>{it}</button>
                </li>
            )}
            </ol>
         </li>)
      }
    </ol>
  )
}

export default GameBoard;
