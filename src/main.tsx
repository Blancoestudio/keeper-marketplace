import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Marketplace } from './Marketplace'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme'
import { AppLayout } from './layout/AppLayout'
import { store } from './redux/store'
import './styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <AppTheme>
        <AppLayout>
          <Marketplace/>    
        </AppLayout>
      </AppTheme>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
