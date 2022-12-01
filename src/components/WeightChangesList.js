import React, { useContext } from 'react';
import { Change } from './Change';
import { GlobalContext } from '../context/GlobalState';

export const WeightChangesList = () => {
  const { changes } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className="list">
          { changes.map(change => (<Change key={ change.id } change={ change }/>))}
        </ul>
    </>
  )
}
