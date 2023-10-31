import React from 'react'
import ReactDOM from 'react-dom/client'
import { Marketplace } from './Marketplace'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme'
import { AppLayout } from './layout/AppLayout'

import './styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <AppLayout>
            <Marketplace/>    
        </AppLayout>
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>,
)
