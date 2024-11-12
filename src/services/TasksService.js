import { API_URL } from '@/constants/API_URL'
import { ApiService } from '@/services/ApiService'

export class TasksService {
  static endPoint = `${API_URL}/tasks`

  static _handleError (error) {
    return {
      message: error.message,
      error
    }
  }

  static async index ({ authTasks }) {
    const url = this.endPoint
    try {
      const headers = authTasks.getHeaders()
      const response = await ApiService.request({ url, headers, method: 'GET' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }

  static async store ({ data, authTasks }) {
    const url = this.endPoint
    try {
      const headers = authTasks.getHeaders()
      const response = await ApiService.request({ url, headers, data, method: 'POST' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }

  static async update ({ id, data, authTasks }) {
    const url = `${this.endPoint}/${id}`
    try {
      const headers = authTasks.getHeaders()
      const response = await ApiService.request({ url, headers, data, method: 'PATCH' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }

  static async destroy ({ id, authTasks }) {
    const url = `${this.endPoint}/${id}`
    try {
      const headers = authTasks.getHeaders()
      const response = await ApiService.request({ url, headers, method: 'DELETE' })
      return response
    } catch (error) {
      return this._handleError(error)
    }
  }
}
