import { useEffect, useState } from 'react'

import { TasksContext, getAllTasks, addTask, setStatusTask, deleteTask } from '@/contexts/TasksContext'

export default function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([])

  const handleGetAllTasks = async () => {
    const tasks = await getAllTasks()
    if (tasks) {
      setTasks(tasks)
    }
  }

  const handleAddTask = async ({ title }) => {
    const response = await addTask({ title })
    if (response) {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }
  }

  const handleSetStatusTask = async ({ id }) => {
    const task = tasks.find(task => task.id === id)
    const response = await setStatusTask({ id, finished: !task.finished })
    if (response) {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }
  }

  const handleDeleteTask = async ({ id }) => {
    const response = await deleteTask({ id })
    if (response) {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }
  }

  useEffect(() => {
    handleGetAllTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, getAllTasks: handleGetAllTasks, addTask: handleAddTask, setStatusTask: handleSetStatusTask, deleteTask: handleDeleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
