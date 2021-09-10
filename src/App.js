import React, { Component } from 'react';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Props from './components/Props';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Style from './components/Style';
import Inline from './components/Inline';
import './components/appStyles.css';
import styles from './components/appStyles.module.css'

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
        <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/>
        <UserGreeting/>
        <NameList/>
        <Style primary={true}/>
        <Inline/> 
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div>
    );
  }
}
export default App;
