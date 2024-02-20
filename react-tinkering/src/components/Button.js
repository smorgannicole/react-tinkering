const Button = ({ children, onClick, color }) => {
  return (
    <>
        <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button