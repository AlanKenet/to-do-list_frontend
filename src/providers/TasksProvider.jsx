import { useEffect, useState } from 'react'

import { TasksContext } from '@/contexts/TasksContext'

import { TasksService } from '@/services/TasksService.js'

import { useAuth } from '@/hooks/useAuth'

export default function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([])
  const { auth } = useAuth()

  useEffect(() => {
    if (auth) {
      getAllTasks()
    }
  }, [auth])

  const getAllTasks = async () => {
    const response = await TasksService.index({ auth })

    if (response.tasks) {
      const newTasks = response.tasks
      setTasks(newTasks)
    }
  }

  const addTask = async ({ title }) => {
    const data = { title }
    const response = await TasksService.store({ data, auth })

    if (response) {
      const newTasks = [...tasks, response.task]
      setTasks(newTasks)
    }
  }

  const setStatusTask = async ({ id }) => {
    const task = tasks.find(task => task.id === id)
    const data = { finished: !task.finished }
    const response = await TasksService.update({ id, data, auth })

    if (response) {
      const newTasks = [...tasks]
      newTasks.splice(tasks.indexOf(task), 1, { ...task, ...data })
      setTasks(newTasks)
    }
  }

  const deleteTask = async ({ id }) => {
    const response = await TasksService.destroy({ id, auth })
    if (response) {
      const newTasks = [...tasks]
      newTasks.splice(tasks.findIndex(task => task.id === id), 1)
      setTasks(newTasks)
    }
  }

  return (
    <TasksContext.Provider value={{ tasks, getAllTasks, addTask, setStatusTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
