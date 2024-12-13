```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect will run after every render, including the initial render
    console.log('Count:', count);
    return () => {
      // Cleanup function
      setIsMounted(false);
      console.log('Cleanup');
    };
  }, [count]); // Only re-run the effect if 'count' changes

  useEffect(() => {
    return () => {
      console.log('Component unmounted');
    }
  }, []);

  return (
    <div>
      {isMounted && <p>You clicked {count} times</p>}
      {isMounted && <button onClick={() => setCount(count + 1)}>Click me</button>}
    </div>
  );
}
export default MyComponent; 
```