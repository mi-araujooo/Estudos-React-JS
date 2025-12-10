import { useState } from 'react';

function contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(prev => prev + 1)}>+1</button>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(prev => prev - 1)}>-1</button>
    </div>
  );
}

export default contador;
