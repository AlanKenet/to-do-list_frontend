import { useRouteError } from 'react-router-dom'

export default function NotFound () {
  const error = useRouteError()
  return (
    <div>
      <h1>NOT FOUND</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
