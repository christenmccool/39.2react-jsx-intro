const Button = (props) => {
  let className = `btn btn-`;

  if (props.outline) {
    className += "outline-";
  }
  className += `${props.color}`;

  if (props.small) {
    className += " small";
  }
  if (props.large) {
    className += " large";
  }

  if (props.link) {
    return <a className={className} href={props.link}>{props.text}</a>;
  } else {
    return <button className={className}>{props.text}</button>;
  }
}