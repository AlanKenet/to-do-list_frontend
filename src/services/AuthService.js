import { ApiService } from '@/services/ApiService'
import { API_URL } from '@/constants/API_URL'

export class AuthService {
  #token = {}

  constructor ({ token }) {
    this.#token = token
  }

  static async login ({ username = null, password = null, code = null }) {
    const url = `${API_URL}/auth/login`
    const data = {
      username,
      password,
      code
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
    const url = `${API_URL}/auth/logout`
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
