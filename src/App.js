import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am the react app</h1>
        <p>This is under teh main</p>
        <Person name="Nic" age= '28' />
        <Person name="Celia" age= '70'  />
        <Person name="James" age= '48'  />
        <Person name="Jeremy" age= '15'  />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
