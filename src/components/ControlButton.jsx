export default function ControlButton ({ id, children, handleClick }) {
  return (
    <button id={id} onClick={handleClick}>{children}</button>
  )
}
