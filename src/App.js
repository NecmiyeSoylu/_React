import React, { Component } from 'react'
import User from './Components/User';
import UserApp from './Components/Functional'
import './App_my.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App Component</h1>
        <UserApp title='Employee List'></UserApp>
        <User 
          name='Necmiye'
          salary='10000'
        ></User>
        <User
          name='Hasan'
          dep='Ceng'  
        />
      </div>
    );
  }
}
export default App;