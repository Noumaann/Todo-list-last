
const TodoList = ({handleDelete,handleEdit,  Icon,edit2,trash, handleCheckbox,todos, editForm})=>{

    return(
      

        <>
        
              
              {todos.map((individualTodo,index)=>(
                <div className='todo' key={individualTodo.ID}>

                  <div>
                  {editForm===false&&(
                        <input type='checkbox' checked={individualTodo.completed}
                        onChange={()=>handleCheckbox(individualTodo.ID)}/>
                      )}
                      
                      <span
                      style={individualTodo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>{individualTodo.title}</span>
                  </div>

                  {editForm===false&&(
                    <div className='edit-and-delete'>
                      <div style={{marginRight:7+'px'}}
                      onClick={()=>handleEdit(individualTodo,index)}>
                          <Icon icon={edit2} size={18}/>
                      </div>
                      <div onClick={()=>handleDelete(individualTodo.ID)}>
                          <Icon icon={trash} size={18}/>
                      </div>
                    </div>
                  )}
                        


                </div>
              ))} 

              
            </>

    )
}
  export default TodoList;