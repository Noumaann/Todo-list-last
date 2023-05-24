import React, {useState, useEffect} from 'react'
import Button from './Button'


import { Icon } from 'react-icons-kit'

// import {plus} from 'react-icons-kit/feather/plus'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'
import TodoForm from './TodoForm'
import TodoList from './TodoList'



const getTodosFromLS=()=>{
    const data = localStorage.getItem('Todos');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}



export const Todo = () => {

    
     const [todoValue, setTodoValue]=useState('');

    const [todos, setTodos]=useState(getTodosFromLS());
    


    const handleSubmit=(e)=>{
        e.preventDefault();

        
        const date = new Date();
        const time = date.getTime();
        

        
        let todoObject={
          ID: time,
          TodoValue:todoValue,
          completed: false
        }
        
        setTodos([...todos,todoObject]);
        setTodoValue('');
    }

    
    useEffect(() => {
        localStorage.setItem('Todos',JSON.stringify(todos));
    }, [todos])

    
    const handleDelete=(id)=>{
       console.log(id);
      const filtered = todos.filter((todo)=>{
        return todo.ID!==id
      });
      setTodos(filtered);
    }

    
    const [editForm, setEditForm]=useState(false);

    
    const [id,setId]=useState();

    
    const handleEdit=(todo,index)=>{
      setEditForm(true);
      setTodoValue(todo.TodoValue);
      setId(index);
    }

    
    const handleEditSubmit=(e)=>{
      e.preventDefault();
      
      let items = [...todos];
      
      let item = items[id];
      
      item.TodoValue=todoValue;
      item.completed=false;
      
      items[id]=item;
      
      setTodos(items);
      setEditForm(false);
      setTodoValue('');
    }

    const handleCheckbox=(id)=>{
        let todoArray=[];
        todos.forEach((todo)=>{
          if(todo.ID===id){
            if(todo.completed===false){
              todo.completed=true;
            }
            else if(todo.completed===true){
              todo.completed=false;
            }
          }
          todoArray.push(todo);
        
          setTodos(todoArray);
        })
      }
  


   
   

    return (
        
        <>
        
          {editForm===false&&(
            <div className="form">
              <form autoComplete="off" onSubmit={handleSubmit}>


            
              {/* <Button />  */}

                <div className="input-and-button">
                  <input type='text' placeholder="Add an Item" required
                  onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>

                  <div className='button'>

                  <Button   type="submit">Add</Button>
                    
                  </div>
                </div> 
              </form>
            </div>
          )}
          




        
          {editForm===true&&(
         <TodoForm 
         setTodoValue={setTodoValue}
         todoValue={todoValue}
         handleEditSubmit={handleEditSubmit}
         />
          )}
          


          {todos.length>0&&(
            <TodoList
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            todos={todos}
            edit2={edit2}
            editForm={editForm}
            trash={trash}
            Icon={Icon}
            />
          )}
          
     
        </>
    )
}
export default Todo;