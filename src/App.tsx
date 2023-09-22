import { useState } from 'react'
import { Timer } from './components/Timer'
import './App.css'

function App() {
  const [stop, setStop] = useState(false)

  return (
    <div className="min-h-screen bg-blue-400">
      <h1>Timer</h1>
      <Timer stop={stop} setStop={setStop} />
    </div>
  )
}

export default App
