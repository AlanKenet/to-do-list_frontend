import { createContext, useContext, useState } from 'react'

import { tasks as sourceTask } from '@/data/tasks'

const TasksContext = createContext()
export const useTasks = () => useContext(TasksContext)

const getRandomId = (inUseIds, totalNumbers) => {
  let i = 0
  do {
    const newId = Math.ceil(Math.random() * 100)
    if (!inUseIds.some(id => id === newId)) {
      return newId
    } else {
      i++
    }
  } while (i < totalNumbers)
}

export default function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState(sourceTask)

  const addTask = (content) => {
    const id = getRandomId(tasks.map(task => task.id), 100)

    setTasks([...tasks, {
      id,
      content,
      complete: false
    }])
  }

  const setStatusTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, complete: !(t.complete) } : t))
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks]
    newTasks.splice(tasks.findIndex(task => task.id === id), 1)
    setTasks(newTasks)
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, setStatusTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
