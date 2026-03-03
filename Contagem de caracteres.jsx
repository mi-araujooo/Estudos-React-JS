import { useState } from "react";

export default function App() {
  const [valor, setValor] = useState("");
  let v_sem = valor.replace(/\s/g, '').length


  return (
    <div>
      <input
        type="text"
        placeholder="Digite aqui..."
        value={valor}
        onChange={(e) => setValor(e.target.value)} />
        
      <p>{v_sem}</p>
    </div>
  );
}