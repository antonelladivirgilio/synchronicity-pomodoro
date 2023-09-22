import { useState } from 'react'
import { Timer } from './components/Timer'
import './App.css'
import { Controls } from './components/Controls'

function App() {
  const [stop, setStop] = useState(true)

  return (
    <main className="grid justify-center min-h-screen bg-red-200">
      <Timer stop={stop} setStop={setStop} />

      <Controls stop={stop} setStop={setStop} />
    </main>
  )
}

export default App
