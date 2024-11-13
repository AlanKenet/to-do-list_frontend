import { useEffect, useState } from 'react'

import { TasksContext } from '@/contexts/TasksContext'

import { useAuth } from '@/hooks/useAuth'

import { TasksService } from '@/services/TasksService.js'

export default function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([])
  const [authTasks, setAuthTasksKey] = useAuth('')

  useEffect(() => {
    if (authTasks) {
      getAllTasks()
    }
  }, [authTasks])

  async function getAllTasks () {
    const response = await TasksService.index({ authTasks })

    if (response.tasks) {
      const newTasks = response.tasks
      setTasks(newTasks)
    } else {
      console.log(response.message)
    }
  }

  async function addTask ({ title }) {
    const data = { title }
    const response = await TasksService.store({ data, authTasks })

    if (response) {
      const newTasks = [...tasks, response.task]
      setTasks(newTasks)
    }
  }

  async function setStatusTask ({ id }) {
    const task = tasks.find(task => task.id === id)
    const data = { finished: !task.finished }
    const response = await TasksService.update({ id, data, authTasks })

    if (response) {
      const newTasks = [...tasks]
      newTasks.splice(tasks.indexOf(task), 1, { ...task, ...data })
      setTasks(newTasks)
    }
  }

  async function deleteTask ({ id }) {
    const response = await TasksService.destroy({ id, authTasks })
    if (response) {
      const newTasks = [...tasks]
      newTasks.splice(tasks.findIndex(task => task.id === id), 1)
      setTasks(newTasks)
    }
  }

  return (
    <TasksContext.Provider value={{ tasks, updateApiKey: setAuthTasksKey, getAllTasks, addTask, setStatusTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}
