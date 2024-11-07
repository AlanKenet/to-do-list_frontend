const API_URL = 'http://localhost:8000/api'

export const index = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`)

    const json = await response.json()

    return json.tasks
  } catch (error) {
    return []
  }
}

export const store = async ({ title }) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })

    const json = await response.json()

    return json
  } catch (error) {
    return []
  }
}

export const update = async ({ id, title, finished }) => {
  try {
    const data = {}

    data.title ??= title
    data.finished ??= finished

    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await response.json()

    return json
  } catch (error) {
    return []
  }
}

export const destroy = async ({ id }) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    })

    const json = await response.json()

    return json
  } catch (error) {
    return []
  }
}
