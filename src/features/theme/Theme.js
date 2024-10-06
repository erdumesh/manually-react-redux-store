import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changecolor } from './themeSlice';
function Theme(){
    const color = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()
    
 
    return(
        <div >
            <input onChange={(e)=>dispatch(changecolor(e.target.value))} />
            <button >Change Color</button>
            <h1 style={{color:`${color}`}}>Color is : {color}</h1>
            
            <input onCopy={(e)=>console.log(e.target.value)}/>
            
        </div>
    )
}

export default Theme;