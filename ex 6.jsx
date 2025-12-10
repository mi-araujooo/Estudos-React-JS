import { useState } from 'react';


function mostrar() {
  const [state, estado] = useState(true)

  return (
    <div>
      <button type="button" onClick={() => estado(prev => !prev)}>{state ? "ESCONDER" : "MOSTRAR"}</button>
      <p>{state ? "Segredo revelado" : ""}</p>
    </div>
  )
}


export default mostrar;
