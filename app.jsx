import React from "react";
import MyButton from "./components/Button";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

// ----------------Conditional Rendering---------------

// const user = {
//     name:"Karan",
//     id:"28",
//     imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1-tiy7YDb83_KFy-AySQBYfkuEAN75tg5Q&s",
//     imageSize:80,
//     borderRadius:"50%"
// }

// let content;

// let isLoggedIn = true;

// if(isLoggedIn){
//     content = <AdminPanel/>
// }else{
//     content = <LoginForm/>
// }




// export default function App(){
//     return(
//         <div>
//             {/* <h1>Hi! {user.name} your room id is {user.id}</h1>
//             <img src={user.imageURL} style={{
//                 width:user.imageSize,
//                 height:user.imageSize,
//                 borderRadius:user.borderRadius
//             }}/>
//             <MyButton/> */}
//             {content}
//         </div>
//     )
// }

// export default function App(){
//     return(
//         <div>
//             {isLoggedIn?(<AdminPanel/>):(<LoginForm/>)}
//         </div>
//     )
// }

// export default function App(){
//     return(
//         <div>
//             {isLoggedIn && <AdminPanel/>}
//         </div>
//     )
// }


//-----------------Rendering lists----------------------


// const products = [
//     {name:"Pen",id:2,use:true},
//     {name:"Book",id:4},
//     {name:"Table",id:9,use:true},
//     {name:"Chair",id:3}
// ]

// const items = products.map((item) =>{
//     return <li key={item.id} style={{color: item.use ? "green":"black"}}>{item.name}</li>
// })

// console.log(items);

// export default function App(){
//     return(
//         <div>
//             <h1>List Of Products</h1>
//             <ul>{items}</ul>
//         </div>
//     )
// }


//----------------Responding to events ---------------------

export default function App(){
    const [count, setCount] = useState(0);

    function clickCount(){
        count == 10?setCount(0):setCount(count + 1)
    }
    return(
        <div>
            <MyButton count={count} onClick={clickCount}/>
            <MyButton count={count} onClick={clickCount}/>
        </div>
    )
}

