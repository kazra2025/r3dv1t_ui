
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


console.log("index.js: About to create root")
const root = createRoot(document.getElementById('rv_root'));

console.log("index.js: About to render App")
root.render(<App />);

