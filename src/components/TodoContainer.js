import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import {read} from "./services/read"
import { create } from "./services/create"
import { deleteItem } from "./services/delete"
import { updateItem } from "./services/update"

const TodoContainer = () => {
    const [tasks, setTasks] = useState([]);
    const { handleSubmit, register, reset } = useForm();
    const [update, setUpdate] = useState(false);
  
    const createTask = (value) => {
      const Func = async () => {
        const res = await create(value);
        setTasks((prevState) => [...prevState, res.data]);
        reset();
      };
      Func();
    };
  
    useEffect(() => {
          const myFunc = async () => {
              const data = await read();
        
              setTasks(data.todos);
              setUpdate(false)
            };
            myFunc();
      
    }, [update]);
  
    const deleteTask = (id) => {
      const miFunc = async () => {
        const res = await deleteItem(id);
        setTasks((prevState) => prevState.filter((value) => value.id !== id));
        return res;
      };
      miFunc();
    };
  
    const updateTask = (id, data) => {
      data.isCompleted = !data.isCompleted;
      const miFunc = async () => {
        const res = await updateItem(id, data);
        setUpdate(true);
        return res;
      };
      miFunc();
      setUpdate(false);
    };
  
    const list = tasks.map((value) => (
      <TodoItem
        key={value.id}
        task={value.task}
        student={value.student}
        id={value.id}
        deleted={deleteTask}
        isCompleted={value.isCompleted}
        handleUpdate={updateTask}
      />
    ));
  
    return (
      <div className="container">
        <h2>CRUD - Things to do</h2>
        <CreateTodo
          handleSubmit={handleSubmit}
          register={register}
          newTask={createTask}
        />
        <div className="datos">{list}</div>
      </div>
    );
  };
  
  export default TodoContainer;