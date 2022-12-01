import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddChange = () => {
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);

    const { addChange } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newChange = {
            id: Math.floor(Math.random() * 10000000),
            date,
            amount: +amount
        }
        addChange(newChange)

        const newdata = { ...newChange }
        newdata[e.target.id] = e.target.value
        console.log(JSON.stringify(newdata))
    }

    return (
        <>
            <h3>Add new weight change</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                        <br />
                        (negative: loss, positive: gain)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                <button className="btn">Add change</button>
            </form>
        </>
    )
}
