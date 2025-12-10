import { useState } from 'react';


function contador() {
  const [count, setCount] = useState(0)


  function incrementar() {
    setCount(prev =>{
      if (prev <10) {
        return prev + 1
      }
      return prev
    })
  }

  function diminuir() {
    setCount(prev => {
      if (prev > 0) {
        return prev - 1
      }
      return prev
    })
  }

  return (
    <div>
    <button type="button" onClick={() => incrementar()}> +1</button> 
    <p>{count}</p>
    <button type="button" onClick={() => diminuir()}>-1</button>
    </div>
  )
}


export default contador;
