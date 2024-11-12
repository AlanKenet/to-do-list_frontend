import { useState, useEffect } from 'react'

import { AuthService } from '@/services/AuthService'

export function useAuth (initKey) {
  const [apiKey, setApiKey] = useState(initKey)
  const [auth, setAuth] = useState(null)

  function updateAuth (apikey) {
    const AuthServiceInstance = new AuthService({ apiKey })
    setAuth(AuthServiceInstance)
  }

  useEffect(() => {
    if (apiKey) {
      updateAuth(apiKey)
    }
  }, [apiKey])

  return [
    auth,
    setApiKey
  ]
}
