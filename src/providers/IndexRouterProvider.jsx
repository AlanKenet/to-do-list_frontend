import { RouterProvider } from 'react-router-dom'

import { indexRouter } from '@/routers/index'

export default function IndexRouterProvider () {
  return (
    <RouterProvider router={indexRouter} />
  )
}
