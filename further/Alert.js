const Alert = (props) => {
  const className = `alert alert-${props.color}`;

  return (
    <div className={className}>
      {props.text}
    </div>
  )
}