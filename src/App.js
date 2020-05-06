import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Freddie", age: 30 },
      { name: "Jason", age: 15 },
      { name: "Micheal", age: 55 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am the react app</h1>
        <p>This is under teh main</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name="James" age= '48' > Added content child: hobbie </Person>
        <Person name="Jeremy" age= '15'  />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
