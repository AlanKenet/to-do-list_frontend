import { useState } from 'react'

import { AuthContext } from '@/contexts/AuthContext'

import { AuthService } from '@/services/AuthService'
import { UsersService } from '@/services/UsersService'

import { useAuthState } from '@/hooks/useAuthState'

export default function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [auth, setAuth] = useAuthState(null)

  async function login ({ username, password, code }) {
    const response = await AuthService.login({ username, password, code })
    const { user, token } = response.data
    const newUser = new UsersService({ ...user })
    setCurrentUser(newUser)
    setAuth(token)
  }

  async function logout () {
    const response = await AuthService.logout()
    if (response) {
      setCurrentUser(null)
      setAuth(null)
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
