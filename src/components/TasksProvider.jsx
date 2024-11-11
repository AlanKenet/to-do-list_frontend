import { useEffect, useState } from 'react'

import { TasksContext } from '@/contexts/TasksContext'

import { TasksService } from '@/services/TasksService.js'

export default function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([])
  const [apiKey, setApiKey] = useState('j6lpB8495Kdl')

  TasksService.apiKey = apiKey

  const getAllTasks = async () => {
    const response = await TasksService.index({ apiKey })

    const tasks = response

    console.log(tasks)

    if (tasks) {
      setTasks(tasks)
    }
  }

  const addTask = async ({ title }) => {
    const response = await addTask({ title })
    if (response) {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }
  }

  const setStatusTask = async ({ id }) => {
    const task = tasks.find(task => task.id === id)
    const response = await setStatusTask({ id, finished: !task.finished })
    if (response) {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }
  }

  const deleteTask = async ({ id }) => {
    const response = await deleteTask({ id })
    if (response) {
      const tasks = await getAllTasks()
      setTasks(tasks)
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, getAllTasks, addTask, setStatusTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
