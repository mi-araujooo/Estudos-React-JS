import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");

  return (
    <div>
    <input
      type="text"
      placeholder="Digite aqui..."
      value={valor}
      onChange={(e) => setValor(e.target.value)} />

    <p>{valor}</p>
   </div>
  );
}