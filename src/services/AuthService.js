export class AuthService {
  #apiKey

  constructor ({ apiKey }) {
    this.#apiKey = apiKey
  }

  setApiKey ({ apiKey }) {
    this.#apiKey = apiKey
  }

  getHeaders () {
    if (this.#apiKey === undefined) {
      throw new Error('No API key')
    }
    return {
      'Content-Type': 'application/json',
      Authorization: this.#apiKey
    }
  }
}
