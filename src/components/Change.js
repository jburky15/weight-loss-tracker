import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Change = ({ change }) => {
    const { deleteChange } = useContext(GlobalContext)
    const sign = change.amount < 0 ? '-' : '+';

  return (
    <li className={ change.amount < 0 ? 'minus' : 'plus'}>
        { change.date } 
        <span>{ sign }{ Math.abs(change.amount) } lbs</span>
        <button onClick={() => deleteChange(change.id)} className="delete-btn">X</button>
    </li>
  )
}
