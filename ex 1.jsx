import { useState } from 'react';

function contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>
        Cliques: {count}
      </button>
    </div>
  );
}

export default contador;
