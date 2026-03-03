import { useState } from "react";
import { useEffect } from "react";
import "./index.css"

export default function App() {
  const [color, setColor] = useState("light");
  useEffect(() => {
    document.body.className = color;
  }, [color]);

  return (
    <button type="button" onClick={() => setColor(color === "light" ? "dark" : "light")}>Mude a cor de fundo</button>
  );
}