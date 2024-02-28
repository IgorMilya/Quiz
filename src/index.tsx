import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'routes'
import './style/index.css'
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
      <AppRoutes />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
