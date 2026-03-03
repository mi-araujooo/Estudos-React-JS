import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <p>{num}</p>
      <button type="button" onClick={() => setNum(num + 1)}>Aumentar 1</button>
      <button type="button" onClick={() => setNum(0)}>Zerar</button>
      <button type="button" onClick={() => setNum(num - 1)}>Diminuir 1</button>
    </>
  );
}