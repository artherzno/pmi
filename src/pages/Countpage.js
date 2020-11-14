import React, { useState } from 'react';

export default function CountPage() {
    const [count, setcount] = useState(0);

    return (
        <div>
        <h2>CountPage</h2>
        <p>count: {count}</p>
        <button onClick={()=>setcount(count+1)}>Click me</button>
        </div>
    );
}
  