import Button from "./Button";

const TodoForm = ({
  editForm,
  setTodoValue,
  todoValue,
  handleSubmit,
  handleEditSubmit,
}) => {
  return (
    <div className="wrapper">
      <h3>Todo-listt</h3>
      <div className="form-and-todo-box">
        <div className="form">
          <form
            autoComplete="off"
            onSubmit={editForm ? handleEditSubmit : handleSubmit}
          >
            <div className="input-and-button">
              <input
                type="text"
                placeholder={editForm ? "Edit your Item" : "Add an Item"}
                required
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
              />
              <div className="button">
                <Button type="submit">{editForm ? "Update" : "Add"}</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TodoForm;
