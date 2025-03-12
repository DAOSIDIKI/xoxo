import React from 'react'

const Log = ({turns}) => {
  return (
    <ol id='log'>
      {turns.map((item,index) => <li key={index}>{item.player} Played ({item.state.row},{item.state.col})</li>)}
    </ol>
  )
}

export default Log
