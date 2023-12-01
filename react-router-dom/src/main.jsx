import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Aplicacion } from './Aplicacion.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
        <Aplicacion></Aplicacion>
      </React.StrictMode>
  </BrowserRouter>,
)
