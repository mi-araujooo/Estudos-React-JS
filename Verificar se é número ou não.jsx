import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState(0);
  const [estado, setEstado] = useState("");

  function teste(kw) {
    let kw_p = Number(kw)
    if (isNaN(kw_p)) {
      setEstado("Não é número")
    } else {
      setEstado("É número")
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite aqui..."
        value={valor}
        onChange={(e) => setValor(e.target.value)} />
      <button onClick={() => teste(valor)}>VERIFICAR</button>

      <p>{estado}</p>
    </div>
  );
}