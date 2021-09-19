const Tweet = (props) => (
  <div class="tweet">
    <span class="name">{props.name} </span>
    @<span>{props.username} </span> 
    <i>{props.date}</i>
    <p>{props.message}</p>
  </div>
)