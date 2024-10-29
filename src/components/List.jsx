import { useTasks } from '@/contexts/TaskProvider'

import Element from '@/components/Element'

export default function List () {
  const { tasks } = useTasks()
  return (
    <ul>
      {
        tasks.map(({ id, content, complete }) => (
          <Element key={id} id={id} complete={complete}>
            {content}
          </Element>
        ))
      }
    </ul>
  )
}
