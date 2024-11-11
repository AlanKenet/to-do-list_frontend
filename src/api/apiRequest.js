export const apiRequest = async ({ url, method = 'GET', headers = {}, data = null }) => {
  try {
    const options = {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Error en la petición')
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}
