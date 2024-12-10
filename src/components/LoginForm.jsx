import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

export default function LoginForm () {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const { login, auth } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value
    }

    setValues(newValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!Object.values(values).includes('')) {
      try {
        await login({ ...values })
      } catch (error) {
        handleError(error)
      }
    }
  }

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      await handleSubmit(e)
    }
  }

  const handleError = (error) => {
    console.error(error)
  }

  useEffect(() => {
    if (auth) {
      console.log((auth))
      navigate('/home')
    }
  }, [auth, navigate])

  return (
    <form name='signIn' onSubmit={handleSubmit}>
      <h1>Login to Your Account</h1>
      <fieldset>
        <input
          id='signInEmailInput'
          type='email'
          name='email'
          placeholder='Email'
          autoComplete='off'
          value={values.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
        />
        <input
          id='signInPasswordInput'
          type='password'
          name='password'
          placeholder='Password'
          autoComplete='off'
          value={values.password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
        />
      </fieldset>
      <a href='#'>Forgot your password?</a>
      <div>
        <button id='signInButton' type='button' onClick={handleSubmit}>SIGN IN</button>
      </div>
    </form>
  )
}
