import { useTasks } from '@/hooks/useTasks'

import Element from '@/components/Element'

export default function List () {
  const { tasks } = useTasks()
  return (
    <ul>
      {
        tasks.map(({ id, title, finished }) => (
          <Element key={id} id={id} finished={finished}>
            {title}
          </Element>
        ))
      }
    </ul>
  )
}
