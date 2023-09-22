import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TimerProvider } from './contexts/timerContext'

ReactDOM.createRoot(document.getElementById('root')!, {
  identifierPrefix: 'app-pomodoro-'
}).render(
  <TimerProvider>
    <App />
  </TimerProvider>
)
