import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice'
function Counter(){
    const count = useSelector((state)=>state.counter.count)
    const color = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()
    return (
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <span style={{color:`${color}`}}> Count: {count}</span>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>Increment by 10</button>
      </div>
    );
}

export default Counter;