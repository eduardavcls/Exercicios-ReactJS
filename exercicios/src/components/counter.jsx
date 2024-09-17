import { useState } from "react";
 
function Counter (){

const [ counter, setCounter] = useState(0)
 

  const increase =() => {
    setCounter(counter +1);

  }

  const decrement =() => {
    setCounter(counter -1);
  }

  return (
    <div>

      <h1>Contador numérico: {counter}</h1>
      <button onClick={increase}> Incrementar</button>
      <button onClick={decrement}> Decrementar</button>
    </div>
  )
}

export default Counter;
