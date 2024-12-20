import { useNavigate } from 'react-router-dom'

import LoginForm from '@/components/LoginForm'
import SideContentLogin from '@/components/SideContentLogin'

import { useAuth } from '@/hooks/useAuth'

import '@/styles/Login.css'

export default function Login () {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()

    const { target } = e
    const { id } = target

    if (id === 'signUpButton') {
      navigate('/signup')
    }
    await login({})
  }

  return (
    <main className='login'>
      <LoginForm />
      <SideContentLogin>
        <h1>New Here?</h1>
        <p>Sign up and enjoy all features or try it as guest!</p>
        <div>
          <button id='signUpButton' type='button' onClick={handleClick}>SIGN UP</button>
          <button id='signInGuestButton' type='button' onClick={handleClick}>I'M GUEST</button>
        </div>
      </SideContentLogin>
    </main>
  )
}
