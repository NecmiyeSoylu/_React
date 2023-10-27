import React, { Component } from 'react'
import User from './Components/User';
import UserApp from './Components/Functional'
import Func_parse from './Components/Func_new'
import Func_up from './Components/Func_new2'
import Class_try from './Components/Class_try'


import './App_my.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App Component</h1>
        <UserApp header='Employee List'></UserApp>
        <User 
          name='Necmiye' 
          salary='10000$'
          dep='front End'
        ></User>
        <br/>
        <User
          name='Hasan'
          dep='Ceng' 
          salary='7500$' 
        />
        <hr/>
        <Func_parse
          salary='17235'
        />
        <Func_up
          name='kemal'
          surname='lol'
        />
        <br/><hr/><br/>
        <Class_try
          name='Necmiye'
          std_num={2010213001}

        />
        <br/><br/><hr/>
        
      </div>
    );
  }
}
export default App;