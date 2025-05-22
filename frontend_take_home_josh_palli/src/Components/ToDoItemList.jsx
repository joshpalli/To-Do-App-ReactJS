import { useState } from 'react';
import CheckButton from './CheckButton';

const ToDoItemList = ({ todos, setTodos, strike, setStrike }) => {
  // set the state for editing
  const [editID, setEditID] = useState(null);
  const [editInput, setEditInput] = useState("");

  // handle function
  // Edit Button is Clicked
  const handleEditClick = (todo) => {
    setEditID(todo.id);
    setEditInput(todo.input);
  }

  // Save Button is Clicked
  const handleSaveClick = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todos, input: editInput, date: todo.date, priority: todo.priority} : todo
    )))
    setEditID(null);
    setEditInput("");
  }

  const handleStrike = (e) => {
    setStrike(e.target.checked)
  }

    return(
        <div className="w-full min-h-[230px] bg-white shadow-md border-t border-b border-gray-300">
        {todos.length === 0 ? <div className="w-full min-h-[230px] flex items-center justify-center"><h1 className="text-2xl text-gray-400 flex items-center justify-center italic">
          All items completed!
          </h1></div> : 
        <ul className="h-full w-full">
          {todos.map(todo => (
            <li className="w-[400px] flex items-center justify-between pt-[17px] pr-[40px] pb-[17px] pl-[15px] border-t border-b border-gray-300 text-sm break-words" key={todo.id}>
              <div className="flex space-x-2">
                <input type="checkbox" className="p-2 bg-gray-400 border border-gray-500 shadow-md max-h-[15px] mt-5 rounded-lg" value={strike} onChange={handleStrike} />
                { todo.id === editID ?
                <input
                type="text"
                className="max-w-[275px] rounded border border-gray-400 p-2 shadow-md"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                /> :
                  <div className="flex-col">
                    {todo.strike === true ? <p className="max-w-[275px] leading-6 line-through font-bold">{todo.input}</p> : <p className="max-w-[275px] leading-6 font-bold">{todo.input}</p>}
                    <p>Due Date: {todo.date}</p>
                    <p>Priority: {todo.priority}</p>
                  </div>
                }
              </div>
              <div className="flex space-x-2">
                {
                  todo.id === editID ?
                  <button
                  className="p-2 bg-blue-500 text-white border border-gray-400 rounded shadow-md hover:bg-blue-700 font-bold"
                  onClick={() => handleSaveClick(todo.id)}>Save</button> :
                  <button
                  className="p-2 bg-blue-500 text-white border border-gray-400 rounded shadow-md hover:bg-blue-700 font-bold"
                  onClick={() => handleEditClick(todo)}>Edit</button>
                }
                  <button className="flex items-center justify-center ml-auto border border-customCyan h-[40px] w-[40px] hover:bg-gray-100 transition-colors duration-250 ease-in-and-out shadow-md" onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>
                      <CheckButton />
                  </button>
                </div>
            </li>
          ))}
        </ul>
        }
      </div>
    )
}

export default ToDoItemList;