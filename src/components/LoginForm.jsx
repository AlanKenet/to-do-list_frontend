import { useState } from 'react'

import ControlButton from '@/components/ControlButton'
import { useAuth } from '@/hooks/useAuth'

export default function LoginForm () {
  const [value, setValue] = useState('j6lpB8495Kdl')
  const { loginWithCode } = useAuth()

  const handleChange = (e) => {
    const { target } = e
    const { value } = target

    setValue(value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const { target } = e
    const { id } = target

    if (value && id === 'withPass') {
      updateApiKey(value)
      setValue('')
    }
    if (id === 'withInvitation') {
      updateApiKey('guest')
      setValue('')
    }
  }

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
