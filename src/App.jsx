import InputForm from '@/components/InputForm'
import List from '@/components/List'
import Login from '@/components/Login'

import '@/App.css'

export default function App () {
  return (
    <main className='app'>
      <Login />
      <div>
        <InputForm />
        <List />
      </div>
    </main>
  )
}
