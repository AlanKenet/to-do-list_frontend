import { ApiService } from '@/services/ApiService'

export class AuthService {
  #token

  constructor ({ token }) {
    if (!token) {
      throw new Error('Token required')
    }
    this.guest = (token?.accessToken === 'guest')
    this.#token = token
  }

  static async login ({ username = null, password = null }) {
    if (!(username || password)) {
      return AuthService.getGuestLoginResponse()
    }

    const url = `${import.meta.env.VITE_API_URL}/auth/login`
    const data = {
      username,
      password
    }
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
    try {
      const response = await ApiService.request({ url, data, headers, method: 'POST' })

      if (!response.ok) {
        throw new Error('Login Failed')
      }

      return response.json()
    } catch (error) {
      return {
        message: error.message,
        error
      }
    }
  }

  async logout () {
    const url = `${import.meta.env.VITE_API_URL}/auth/logout`
    try {
      const headers = this.getHeaders()
      const response = await ApiService.request({ url, headers, method: 'POST' })

      if (!response.ok) {
        throw new Error('Logout failed')
      }
      return response
    } catch (error) {
      return {
        message: error.message,
        error
      }
    }
  }

  static getGuestLoginResponse () {
    const data = {
      user: {
        id: 0,
        name: 'Guest',
        username: 'Guest',
        email: 'guest@guest.com'
      },
      token: {
        accessToken: 'guest'
      }
    }
    return { data }
  }

  getHeaders () {
    if (!this.#token) {
      throw new Error('No token available')
    }
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.#token.accessToken
    }
  }
}
