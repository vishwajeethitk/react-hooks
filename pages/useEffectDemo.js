import React, { useState, useEffect } from 'react';

function useEffectDemo() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('In Use effect');

    return (() => console.log('In Use effect clean up'));
  });

  return (
    <div>
      <p>You clicked  times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default useEffectDemo;