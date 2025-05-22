import { useState } from 'react';

const AddForm = ({ input, handleChildAdd, onChange, date, setDate, priority, setPriority }) => {
    const handleSubmit = (e) => {
        handleChildAdd(e)
    }

    // handles for date and priority
    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handlePriority = (e) => {
        setPriority(e.target.value)
    }

    return(
        <form className="mt-4 flex-col" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
                <input className="p-2 rounded border border-gray-400 w-full max-w-xs" type="text" placeholder="Add a thing to do..." value={input} onChange={onChange}></input>
                <button className="w-[50px] bg-gray-800 hover:bg-black text-white font-medium p-2 rounded border-none transition-colors duration-300 ease-in-and-out" type="submit">
                    Add
                </button>
            </div>
            <div className="flex space-x-2 mt-1 ml-4">
                <input type='date' className="p-2 border border-gray-400 rounded h-[45px]" value={date} onChange={handleDate} />
                <select className="border border-gray-400 hover:gray-200 w-[110px] rounded h-[45px]" value={priority} onChange={handlePriority}>
                    <option value="">--Priority--</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
        </form>
    )
}

export default AddForm;