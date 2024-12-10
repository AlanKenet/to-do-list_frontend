import { useRef, useState } from 'react'

import { useTasks } from '@/hooks/useTasks'

export default function InputForm () {
  const [value, setValue] = useState('')
  const inputRef = useRef()
  const { addTask } = useTasks()

  const handleChange = (e) => {
    const { target } = e
    const { value } = target

    setValue(value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (value) {
      addTask({ title: value })
      setValue('')
      inputRef.current.focus()
    }
  }
  return (
    <form name='task'>
      <input
        type='text'
        name='task'
        id='task'
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Añadir</button>
    </form>
  )
}
