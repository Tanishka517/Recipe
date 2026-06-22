import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // <-- Change this line to look exactly like this!

createRoot(document.getElementById('root')).render(
  <App />
)