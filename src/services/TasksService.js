import { API_URL } from '@/constants/API_URL'
import { apiRequest } from '@/api/apiRequest'

export class TasksService {
  static endPoint = `${API_URL}/tasks`

  constructor ({ apiKey }) {
    this.apiKey = apiKey
  }

  static index = async () => {
    const url = this.endPoint
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.apiKey
    }

    apiRequest({ url, headers, method: 'GET' })
  }

  store = async (params) => apiRequest({ ...params, method: 'POST' })

  update = async (params) => apiRequest({ ...params, method: 'PATCH' })

  destroy = async (params) => apiRequest({ ...params, method: 'DELETE' })
}
