const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.image} />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.text}</p> 
        {props.children}
      </div>
    </div>
  )
}