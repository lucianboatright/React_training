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

  swithNameHandeler = () => {
    // console.log('Was clicked');
    // DONT DO THIS!! this.state.persons.age = this.state.persons.age +=1
    this.setState({
      persons: [
        { name: "Freddie", age: this.state.persons[0].age += 1},
        { name: "Jason", age: this.state.persons[0].age += 1 },
        { name: "Micheal", age: this.state.persons[0].age += 1}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am the react app</h1>
        <p>This is under teh main</p>
        <button onClick={this.swithNameHandeler} >Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name="James" age= '48' > Added content child: hobbie </Person>
        <Person name="Jeremy" age= '15'  />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
