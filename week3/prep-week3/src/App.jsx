import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useResizeScreen from './resizeScreen'
function App() {
const { width, height } = useResizeScreen();

  return (
    <div>
      <h1>Screen Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default App
