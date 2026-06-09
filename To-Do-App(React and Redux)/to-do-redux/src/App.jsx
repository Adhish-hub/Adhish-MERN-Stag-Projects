import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./features/todo/todoSlice";

const App = () => {
  const [text, setText] = useState("");

  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    dispatch(addTask(text));
    setText("");
  };

 return (
  <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-slate-800 text-white flex justify-center items-start px-4 py-10">
    <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl">
      <h1 className="text-4xl font-bold text-center mb-2">To Do List</h1>

      <p className="text-center text-gray-400 mb-6">
        Add your daily tasks here
      </p>

      <form
        onSubmit={submitHandler}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Add a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
        />

        <button className="bg-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-700 active:scale-95 transition">
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gray-900/80 border border-gray-700 px-4 py-3 rounded-xl flex justify-between items-center hover:border-gray-500 transition"
          >
            <span className="text-gray-100 break-all">{task}</span>

            <button
              onClick={() => dispatch(deleteTask(index))}
              className="ml-4 bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <div className="text-center mt-8 border border-dashed border-gray-600 rounded-2xl p-6">
          <p className="text-gray-400">No task available</p>
          <p className="text-sm text-gray-500 mt-1">
            Add your first task above
          </p>
        </div>
      )}
    </div>
  </div>
)}


export default App;