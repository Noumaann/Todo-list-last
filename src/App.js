import React from 'react'
 import { Todo } from "./components/Todo";


function App() {
  

  return (
    <div className="wrapper">
      <h3>Todo-listt</h3>
      <div className="form-and-todo-box">
        
         <Todo/> 
         
      </div>
    </div>
  );
}

export default App;