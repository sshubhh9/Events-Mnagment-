import React, { useEffect, useState } from 'react';

function Hooks() {
    const [count,setCount] = useState(0)

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");


    function increment(){
        setCount(count+2)
    }
    function decrement() {
        setCount(count-1)
    }



    useEffect(()=>{
      if(count == 2){
        console.log("hello count")
      }
    },[count])


  return (
    <>
     <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
    </>
  );
}

export default Hooks;