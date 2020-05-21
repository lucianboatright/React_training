import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: this.state.persons[0].age += 1},
        { name: 'Manu', age: this.state.persons[0].age += 1},
        { name: 'Stephanie', age: this.state.persons[0].age += 1 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: this.state.persons[0].age },
        { name: event.target.value, age: this.state.persons[1].age },
        { name: 'Stephanie', age: this.state.persons[2].age  }
      ]
    } )
  }

  togglePersonsHandeler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render () {
    
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: '2px solid blue',
      padding: '8px',
      boxShadow: '0 2px 3px #ccc',
      cursor: 'pointer'
    }; // values need to be in quote marks as it is in js

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandeler}>Switch Name</button>
         {/* use ternary statemnt, if state.shoepwersons ?(ture) do __ :(else) null // put componets in div which can be managed   */}
        { 
        this.state.showPersons ? 
          <div > 
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Change on line click')}
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div> : null 
        }
 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = (props) => {
//     const [ personsState, setPersonsState ] = useState({
//       persons: [
//         { name: "Fred", age: 30 },
//         { name: "Jason", age: 15 },
//         { name: "Micheal", age: 55 }
//       ],
//       // otherState: "Some other state"
//     });

//     // State slicking using two arguments on const [original, newstate(not required to use)]
//     // now outside te perosnState is will carry over and not be lost onClick event
//     // Hooks are all about 'useState' functions(line 6) imported instead of component
//     // const [otherState, setOtherState] = useState('NEW STATEMENT');

//     // console.log(personsState, otherState)

//     const swithNameHandeler = (newName) => {
//       // console.log('Was clicked');
//       // DONT DO THIS!! this.state.persons.age = this.state.persons.age +=1
//       setPersonsState({
//         persons: [
//           { name: newName, age: personsState.persons[0].age += 1},
//           { name: "Jason", age: personsState.persons[1].age += 1 },
//           { name: "Micheal", age: personsState.persons[2].age += 1}
//         ]
//       })
//     }
    
//     return (
//       <div className="App">
//         <h1>Hi I am the react app</h1>
//         <p>This is under teh main</p>
//         <button onClick={swithNameHandeler("NEW onClick binder")} >Switch name</button>
//         <Person 
//           name={personsState.persons[0].name} 
//           age={personsState.persons[0].age} />
//         <Person 
//           name={personsState.persons[1].name} 
//           age={personsState.persons[1].age} />
//         <Person 
//           name={personsState.persons[2].name} 
//           age={personsState.persons[2].age} 
//           click={swithNameHandeler.bind(this, "Name of Click")}> With additional Click </Person>
//         <Person name="James" age= '48' > Added content child: hobbie </Person>
//         <Person name="Jeremy" age= '15'  />
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  
// }

// export default app;



