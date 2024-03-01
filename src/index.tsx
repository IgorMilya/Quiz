import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'routes'
import { FallbackLoader } from 'UI'
import './style/index.css'
import './i18n'

import '@fontsource-variable/nunito-sans'
import '@fontsource/niconne'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<FallbackLoader />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)



