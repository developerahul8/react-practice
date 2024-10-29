import React from "react";
import { useState } from "react";
import './Button.css'

//----------------Responding to events ---------------------

// export default function MyButton(){
//     function handleClick(){
//         alert("You clicked me!")
//     }
//     return(
//         <button className="appBtn" onClick={handleClick}>I'm a button</button>
//     )
// }


//----------------Updating the screen ---------------------

export default function MyButton({count, onClick}){
    return(
        <button count={count} onClick={onClick}>{count} Times Clicked</button>
    )
}