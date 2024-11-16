import { useTasks } from '@/hooks/useTasks'

export default function Element ({ children, id, finished }) {
  const { setStatusTask, deleteTask } = useTasks()

  const handleStatus = () => {
    setStatusTask({ id })
  }

  const handleExistence = () => {
    deleteTask({ id })
  }

  const textDecorator = finished ? 'line-through' : 'none'

  return (
    <li>
      <span onClick={handleStatus} style={{ textDecoration: textDecorator }}>{children}</span>
      <button onClick={handleExistence}>❌</button>
    </li>
  )
}
