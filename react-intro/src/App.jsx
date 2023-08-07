import { useState } from 'react'
import './App.css'

function App() {
  
  const [advice, setAdvice] = useState('');

  async function generateAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={()=>generateAdvice()}>Generate</button>
    </>
  )
}

export default App
