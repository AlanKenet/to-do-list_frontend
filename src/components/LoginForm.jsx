import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ControlButton from '@/components/ControlButton'

import { useAuth } from '@/hooks/useAuth'

export default function LoginForm () {
  const [value, setValue] = useState('')
  const { login, auth } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { target } = e
    const { value } = target

    setValue(value)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const { target } = e
    const { id } = target

    if (value && id === 'withPass') {
      await login({ code: value })
      setValue('')
    }
    if (id === 'withInvitation') {
      await login({})
      setValue('')
    }
  }

  useEffect(() => {
    if (auth) {
      console.log((auth))
      navigate('/home')
    }
  }, [auth, navigate])

  return (
    <form name='login'>
      <fieldset>
        <label htmlFor='apiKey'>API key:</label>
        <input
          type='password'
          name='apiKey'
          id='apiKey'
          value={value}
          onChange={handleChange}
        />
      </fieldset>
      <ControlButton id='withInvitation' handleClick={handleClick}>Guest</ControlButton>
      <ControlButton id='withPass' handleClick={handleClick}>Using my Key</ControlButton>
    </form>
  )
}
