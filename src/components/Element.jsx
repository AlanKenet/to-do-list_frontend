import { useTasks } from '@/contexts/TaskProvider'

import ControlButton from '@/components/ControlButton'

export default function Element ({ children, id, complete }) {
  const { setStatusTask, deleteTask } = useTasks()

  const handleStatus = () => {
    setStatusTask(id)
  }

  const handleExistence = () => {
    deleteTask(id)
  }

  const textDecorator = complete ? 'line-through' : 'none'

  return (
    <li>
      <span onClick={handleStatus} style={{ textDecoration: textDecorator }}>{children}</span>
      <ControlButton handleClick={handleExistence}>❌</ControlButton>
    </li>
  )
}
