const App = () => {
  return (
    <div>
      <Alert 
        text="Great job! You are doing awesome!"
        color="success"
      />

      <Button 
        text="Submit"
        color="primary"
        small
      />
      <Button 
        text="Submit"
        color="success"
        outline
      />
      <Button 
        text="Submit"
        color="light"
        large
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAUgjhLfUXuc6SLHuKRosyDZg0LFBiCWRtw&usqp=CAU"
        title="My pup"
        text="This is my puppy. I love her so much."
        btn-text="Link"
      >
        <Button 
          text="Go here"
          color="primary"
          small
          link="http://www.google.com"
        />
      </Card>

      <Alert 
        text="Warning! This isn't good!! It's almost bedtime!"
        color="warning"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));