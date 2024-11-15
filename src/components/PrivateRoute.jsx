import { Navigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

export default function PrivateRoute ({ children, redirectionRoute }) {
  const { auth } = useAuth()

  if (!auth) {
    return (
      <Navigate to={redirectionRoute} replace />
    )
  }

  return children
}
