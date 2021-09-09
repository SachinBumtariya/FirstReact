import React, { Component } from 'react';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Greet/>
        <Welcome/> 
        <Hello/> 
        <Props name = "Bruce">
          <p> Children </p>
        </Props>
        <Props name = "Lee">
          <button>Button Ex.</button>
        </Props>
        <Props name = "Haward"/> 
        <Message/>
        <Counter/>
      </div>
    );
  }
}
export default App;
