const Person = (props) => (
  <div>
    <p>Learn some information about this person</p>
    <p>Name: {props.name.length > 8 ? props.name : props.name.slice(0, 6)}</p>
    <p>Age: {props.age}</p>
    <h3>{props.age >= 18 ? "Please go vote." : "You must be 18."}</h3>
    <ul>
      {props.hobbies.map(ele => <li>{ele}</li> )}
    </ul>
  </div>
)
