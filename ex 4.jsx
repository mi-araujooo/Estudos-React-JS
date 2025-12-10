import { useState } from 'react';


function mostrar() {
  const [resultado, controle] = useState("")


  function aparecer(valor) {
      if (valor == true) {
        controle("Segredo revelado")
      }else{
        controle ("")
      }
  }

  return (
    <div>
    <button type="button" onClick={() => aparecer(true)}>mostrar</button> 
    <p>{resultado}</p>
    <button type="button" onClick={() => aparecer(false)}>esconder</button>
    </div>
  )
}


export default mostrar;
