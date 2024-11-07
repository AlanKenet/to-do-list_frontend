import { createContext } from 'react'

import { index, store, update, destroy } from '@/api/tasks'

export const TasksContext = createContext()

export const getAllTasks = async () => {
  const tasks = await index()
  return tasks
}

export const addTask = async ({ title }) => {
  const response = await store({ title })
  return response
}

export const setStatusTask = async ({ id, finished }) => {
  const response = await update({ id, finished })
  return response
}

export const deleteTask = async ({ id }) => {
  const response = await destroy({ id })
  return response
}
