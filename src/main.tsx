import React from 'react'
import ReactDOM from 'react-dom/client'
import { Marketplace } from './Marketplace'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Marketplace/>    
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
