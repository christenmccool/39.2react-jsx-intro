const App = () => {
  return (
    <div>
      <Person
        name="Christen"
        age={41}
        hobbies={['running', 'reading', 'coding', 'birdwatching']}
      />
      <Person
        name="Milo"
        age={12}
        hobbies={['reading', 'soccer', 'cooking']}
      />
      <Person
        name="Mia"
        age={7}
        hobbies={['crafts', 'soccer', 'legos']}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

