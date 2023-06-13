import React, { useState, useEffect } from "react";

import { Icon } from "react-icons-kit";

// import {plus} from 'react-icons-kit/feather/plus'
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const getTodosFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Todo = () => {
  const [todoValue, setTodoValue] = useState();

  const [todos, setTodos] = useState(getTodosFromLS());
  const history = useNavigate();

  // const [myData, setMyData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const time = date.getTime();

    let todoObject = {
      ID: time,
      TodoValue: todoValue,
      completed: false,
    };

    setTodos([...todos, todoObject]);
    setTodoValue("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const date = new Date();
  //   const time = date.getTime();

  //    }

  //   let todoObject={
  //     id: time,

  //     title:todoValue,
  //     completed: false
  //   }

  //   setTodos([...todos,todoObject]);
  //   setTodoValue('');
  // }

  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: 'foo',
  //       body: 'bar',
  //       userId: 1,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {

  //       let book = data.title
  //       setMyData(data.title);

  //       if (todoValue) {
  //         book = todoValue
  //       }
  //       else {
  //         book = data.title
  //       }
  //       let todoObject = {
  //         id: time,
  //         title: book,
  //         completed: false
  //       }

  //       setTodos([...todos, todoObject]);
  //       setTodoValue('');
  //       console.log(data);
  //     })

  //     .catch(error => {
  //       let todoObject = {
  //         id: time,
  //         title: todoValue,
  //         completed: false
  //       }

  //       setTodos([...todos, todoObject]);
  //       setTodoValue('');
  //     });
  // }

  //get
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  //     .then((response) => response.json())
  //     .then((json) => setTodos(json));

  // }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const filtered = todos.filter((todo) => {
      return todo.ID !== id;
    });
    setTodos(filtered);
  };

  // const handleDelete = (todo, index) => {
  //   console.log(todo)
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         console.log('item deleted successfully');
  //         let deletedItemIndex = todos.findIndex(i => i.id == todo.id)
  //         let delete_todo = [...todos];
  //         delete_todo.splice(deletedItemIndex,1)
  //         setTodos(delete_todo);
  //       } else {
  //         console.log('unable to delete')
  //       }
  //     })
  //     .catch(error => {
  //     });
  // }

  const [editForm, setEditForm] = useState(false);

  const [id, setId] = useState();

  const handleEdit = (todo, index) => {
    setEditForm(true);
    setTodoValue(todo.TodoValue);
    setId(index);
  };
  // const handleEdit = (todo, index) => {
  //   setEditForm(true);
  //   setTodoValue(todo.title);
  //   setId(todo.id);
  // }

  const handleEditSubmit = (e) => {
    e.preventDefault();

    let items = [...todos];

    let item = items[id];

    item.TodoValue = todoValue;
    item.completed = false;

    items[id] = item;

    setTodos(items);
    setEditForm(false);
    setTodoValue("");
  };

  // const handleEditSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(id)
  //   // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //   //   method: 'PUT',
  //   //   headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify({
  //   //     id,
  //   //     title: todoValue,
  //   //     body: '',
  //   //     userId: 1
  //   //   }),
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((json) => {
  //   //     console.log(json)
  //   //     console.log(todos)
  //   //     console.log(id)
  //   //     let items = [...todos];

  //   //     let item = items.filter(i => i.id == json.id);
  //   //     console.log(item)
  //   //     item.title = json.title;
  //   //     item.completed = false;

  //   //     let updateItemIndex = items.findIndex(i => i.id == json.id)
  //   //     items[updateItemIndex] = item;

  //   //     setTodos(items);
  //   //     setEditForm(false);
  //   //     setTodoValue('');
  //   //   });

  // }

  const handleCheckbox = (id) => {
    let todoArray = [];
    todos.forEach((todo) => {
      if (todo.ID === id) {
        if (todo.completed === false) {
          todo.completed = true;
        } else if (todo.completed === true) {
          todo.completed = false;
        }
      }
      todoArray.push(todo);

      setTodos(todoArray);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    history("/login");
  };

  return (
    <>
      <div className="log">
        <button className="last" onClick={logout}>
          Logout
        </button>
      </div>

      <TodoForm
        setTodoValue={setTodoValue}
        todoValue={todoValue}
        handleEditSubmit={handleEditSubmit}
        handleSubmit={handleSubmit}
        editForm={editForm}
      />

      {todos.length > 0 && (
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
  );
};
export default Todo;
