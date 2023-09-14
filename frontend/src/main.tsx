import React from 'react'
import ReactDOM from 'react-dom/client'
import { Calculadora } from './views'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
)