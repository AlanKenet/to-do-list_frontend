import { useTasks } from '@/hooks/useTasks'

import ControlButton from '@/components/ControlButton'

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
      <ControlButton handleClick={handleExistence}>❌</ControlButton>
    </li>
  )
}
