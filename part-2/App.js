const App = () => {
  return (
    <div>
      <Tweet 
        name="Christen McCool" 
        username="christen" 
        date={new Date().toDateString()} 
        message="so much rain" 
      />
      <Tweet 
        name="Milo McCool"  
        username="milo" 
        date={new Date().toDateString()} 
        message="love this weather" 
      />
      <Tweet 
        name="Mia McCool" 
        username="mia" 
        date={new Date().toDateString()} 
        message="have to clean my room" 
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));