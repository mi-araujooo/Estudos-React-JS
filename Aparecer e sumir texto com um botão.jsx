import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [btn, setBtn] = useState("Aparecer");

  return (
    <>
      <p>{text}</p>
      <button type="button" onClick={() => {
        setText(text === "" ? "Texto Aparecendo" : ""),
          setBtn(btn === "Aparecer" ? "Desaparecer" : "Aparecer")
      }
      }>{btn}</button>
    </>
  );
}