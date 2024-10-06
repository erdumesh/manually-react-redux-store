import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../counter/counterSlice'
function Coin(){
    const coin = useSelector((state)=>state.counter.count)
    const color = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <span style={{color:`${color}`}}>Coin : {coin}</span>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>

        </div>
    )
}

export default Coin;