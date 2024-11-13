import { Outlet } from 'react-router-dom'

import '@/styles/Base.css'

export default function Base () {
  return (
    <div className='base'>
      <Outlet />
    </div>
  )
}
