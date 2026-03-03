import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState("");

  function teste(kw) {
    if (kw % 2 === 0) {
      setEstado("É par")
    } else {
      setEstado("É impar")
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