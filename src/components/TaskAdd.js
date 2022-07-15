import React, { useState, useRef, useEffect} from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function TaskAdd() {
  const [todos, setTodos] = useState([
    {id:1, title: 'Gym', completed: false},
    {id:2, title: 'Homework', completed: true},
    {id:3, title: 'Homework', completed: false}
  ]);

  const taskNameRef = useRef();

  // const LOCAL_STORAGE_KEY = 'todoApp.todos';

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function completeTask(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function clearClick() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  function handleTaskAdd(e) {
    const name = taskNameRef.current.value;
    if(name === ''){
      return
    }else{
      setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), title: name, completed: false}]
      });
    }
    taskNameRef.current.value = null;
  }

  return (
    <div data-testid='task-add' className='main-container flex flex-col items-center mt-10 space-y-10'>
      <div className="task-add-container space-x-4">
        <input ref={taskNameRef} placeholder='Enter a todo...' className='w-52 pl-2 border-2 border-gray-400 rounded placeholder:text-gray-300' type="text" />
        <button className='px-2 border-2 rounded border-gray-500 text-white bg-slate-400 hover:bg-gray-500' onClick={handleTaskAdd}>Add Todo</button>
      </div>
      <div className="tasks-container space-y-4">
        { todos.map((todo) => {
          return (<Todo key={todo.id} todo={todo} completeTask={completeTask}/>)
          })} 
      </div>
      <div className="clear-container">
        <button className='px-2 border-2 rounded border-red-800 text-white bg-red-300 hover:bg-red-400' onClick={clearClick}>Clear Completed</button>
      </div>
    </div>
  )
}
