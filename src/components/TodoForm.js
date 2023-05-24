import Button from "./Button";
const TodoForm = ({setTodoValue,todoValue,handleEditSubmit})=>{
  return(

    <div className="form">
    <form autoComplete="off" onSubmit={handleEditSubmit}>
      <div className="input-and-button">
        <input type='text' placeholder="Edit your Item" required
        onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
        <div className='button edit'>
          
        <Button   type="submit">Update</Button>

        </div>
      </div>
    </form>
  </div>
  )
}
export default TodoForm;