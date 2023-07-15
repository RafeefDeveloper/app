import { useState } from "react";
const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask("");
  };
  const handelDelete = (index) => {
    setTodoList(todoList.filter((task, id) => id !== index));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button onClick={handleTask}>ADD Task</button>
      {todoList.map((task, index) => {
        return (
          <div key={task}>
            <h1 style={{ display: "inline-block" }} className="me-3">
              {task}
            </h1>
            <button onClick={() => handelDelete(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
