

import React, {useState} from 'react'


export default function HooksExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> Youve clicked on the page {count} times. </p>
      <button onClick={() => setCount(count + 1)}> click here</button>
    </div>
  )
};
