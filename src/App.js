import React, { Component } from 'react';
import './App.css';


//import component
import ModalPopup from './Components/modalpopup';
import Control from './Components/control'
import TaskItem from './Components/taskitem'
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">QUẢN LÝ CÔNG VIỆC</h1>
       <Control></Control>
        <ModalPopup id="modalMe" ></ModalPopup>
      </div>

   
    );
  }
}

export default App;
