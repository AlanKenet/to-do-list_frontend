export default function ControlButton ({ children, handleClick }) {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}
