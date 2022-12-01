import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const GainsLosses = () => {
  const { changes } = useContext(GlobalContext)

  const amounts = changes.map(change => change.amount);

  const gain = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const loss = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  )
  
  return (
    <div className="gain-loss-container">
        <div>
            <h4>Loss</h4>
            <p className="weight-minus">{ loss }</p>
        </div>
        <div>
            <h4>Gain</h4>
            <p className="weight-plus">{ gain }</p>
        </div>
    </div>
  )
}
