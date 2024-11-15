import { ApiService } from '@/services/ApiService'

export class TasksService {
  static endPoint = `${import.meta.env.VITE_API_URL}/tasks`

  static _handleError (error) {
    return {
      message: error.message,
      error
    }
  }

  static async index ({ auth }) {
    const url = this.endPoint
    try {
      const headers = auth.getHeaders()
      const response = await ApiService.request({ url, headers, method: 'GET' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }

  static async store ({ data, auth }) {
    const url = this.endPoint
    try {
      const headers = auth.getHeaders()
      const response = await ApiService.request({ url, headers, data, method: 'POST' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }

  static async update ({ id, data, auth }) {
    const url = `${this.endPoint}/${id}`
    try {
      const headers = auth.getHeaders()
      const response = await ApiService.request({ url, headers, data, method: 'PATCH' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }

  static async destroy ({ id, auth }) {
    const url = `${this.endPoint}/${id}`
    try {
      const headers = auth.getHeaders()
      const response = await ApiService.request({ url, headers, method: 'DELETE' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }
}
