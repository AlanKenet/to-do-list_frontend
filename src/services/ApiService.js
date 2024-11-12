export class ApiService {
  static async request ({ url, method = 'GET', headers = {}, data = null }) {
    try {
      const options = {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined
      }

      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error('Response isn\'t OK')
      }

      return await response.json()
    } catch (error) {
      return {
        message: error.message,
        error
      }
    }
  }
}
