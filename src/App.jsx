import IndexRouterProvider from '@/providers/IndexRouterProvider'
import TaskProvider from '@/providers/TasksProvider'

export default function App () {
  return (
    <TaskProvider>
      <IndexRouterProvider />
    </TaskProvider>
  )
}
