import { useState } from "react";
import ToDoList from "./components/ToDoList";

export default function App() {
const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <h1>To Do List</h1>
      <div className = "mb-4">
        <input className="border p-2" type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <ToDoList search={searchValue} />
    </div>
  )
}