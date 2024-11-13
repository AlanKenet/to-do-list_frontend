import { createBrowserRouter } from 'react-router-dom'

import Base from '@/layouts/Base'

import NotFound from '@/views/NotFound'
import Login from '@/views/Login'
import Home from '@/views/Home'

export const indexRouter = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])
