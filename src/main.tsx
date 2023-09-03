import {PomodoroProvider} from './contexts/pomodoroContext'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PomodoroProvider>     
    <App />
  </PomodoroProvider>
)
