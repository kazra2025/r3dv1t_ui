import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Hi');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('welcome to red vault');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{message}</div>;
}

export default App;