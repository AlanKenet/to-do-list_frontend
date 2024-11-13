import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'

const rootElementDOM = document.getElementById('root')

ReactDOM.createRoot(rootElementDOM).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
