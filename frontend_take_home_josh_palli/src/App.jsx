import styles from './App.module.css'
import { useState, useEffect } from 'react';
import CheckButton from './Components/CheckButton';
import AddForm from './Components/AddForm';
import ToDoItemList from './Components/ToDoItemList';

let nextid = 0;

const App = () => {
  // State 
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // Initialize a todos array to track tasks
  const [input, setInput] = useState(""); // Initialize state of input
  const [strike, setStrike] = useState(false);
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");

  // handle functions
  // Function to handle the state of todo list, so we can add tasks
  const handleAdd = (event) => {
    event.preventDefault();
    if (input !== "") {
      setTodos([...todos, { id: nextid++, input: input, strike: strike, date: date, priority: priority }]);
    }
    setInput("")
    event.target.reset()
  }

  // Function to handle the state of the Input
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  // useEffect hook to handle local storage logic
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return(
    <div className="h-screen bg-gray-100">
      <div className="container relative h-screen bg-gray-300 w-[400px] ml-auto mr-auto">
        <div className="h-[68px] bg-gray-800 flex items-center justify-center p-4">
          <h1 className="text-white text-2xl font-bold">TO-DOs</h1>
        </div>
        <AddForm 
        input={input} 
        handleChildAdd={handleAdd} 
        onChange={handleInput}
        date={date}
        setDate={setDate}
        priority={priority}
        setPriority={setPriority}  />
        <div className="h-[70px] pt-[16px] pl-[15px] pb-[26px] justify-between">
          <h1 className="text-3xl font-bold">The List</h1>
        </div>
        <ToDoItemList todos={todos} setTodos={setTodos} strike={strike} setStrike={setStrike} />
      </div>
    </div>
  )
}

export default App;