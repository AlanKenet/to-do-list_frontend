import { RouterProvider } from 'react-router-dom'

import { indexRouter } from '@/routers/indexRouter'

export default function IndexRouterProvider () {
  return (
    <RouterProvider router={indexRouter} />
  )
}
