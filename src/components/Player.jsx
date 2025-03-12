import React, { useState } from 'react'

const Player = ({name,PlayerSymbol,isActive,changePlayerName}) => {
    const [PlayerName,setPlayerName]=useState(name);
    const [edit,setEdit]=useState(false);
    function handleChange(event){
      setPlayerName(event.target.value);
    }
    function handleClick(){
        setEdit(edit => !edit)
        changePlayerName(PlayerSymbol,PlayerSymbol);
    }
  return (
    <li className={isActive && "active" || undefined}>
        <span className='player'>
            {edit? <input type="text" required onChange={handleChange} /> : <span className='player-name'>{PlayerName}</span>}
            <span className='player-symbol'>{PlayerSymbol}</span>
            <button onClick={handleClick}> {edit? "Save" : "Edit"}</button>
        </span>
    </li>
  )
}

export default Player
