import AuthProvider from '@/providers/AuthProvider'
import TaskProvider from '@/providers/TasksProvider'
import IndexRouterProvider from '@/providers/IndexRouterProvider'

export default function App () {
  return (
    <AuthProvider>
      <TaskProvider>
        <IndexRouterProvider />
      </TaskProvider>
    </AuthProvider>
  )
}
