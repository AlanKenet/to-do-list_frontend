import { useState, useEffect } from 'react'

import { AuthService } from '@/services/AuthService'

export function useAuthState (token) {
  const [currentToken, setCurrentToken] = useState(token)
  const [auth, setAuth] = useState(null)

  function updateAuth (token) {
    const AuthServiceInstance = new AuthService({ token })
    setAuth(AuthServiceInstance)
  }

  useEffect(() => {
    if (currentToken) {
      updateAuth(currentToken)
    }
  }, [currentToken])

  return [
    auth,
    setCurrentToken
  ]
}
