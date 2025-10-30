import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'

const container = document.getElementById('app')
if (!container) throw new Error('No se encontró el elemento #app')

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


