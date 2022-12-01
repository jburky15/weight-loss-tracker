import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Total = () => {
  const { changes } = useContext(GlobalContext);
  const amounts = changes.map(change => change.amount);
  const total = amounts.reduce((weight, lbs) => (weight += lbs), 0);

  return (
    <>
      <h4>Current Weight: </h4>
      <h1>{total} lbs</h1>
    </>
  )
}
