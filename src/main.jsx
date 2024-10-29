import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'

import TaskProvider from '@/contexts/TaskProvider'

const rootElementDOM = document.getElementById('root')

ReactDOM.createRoot(rootElementDOM).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
)
