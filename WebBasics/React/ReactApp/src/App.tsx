
import ToDo from "./components/ToDo";
import { useEffect, useState } from "react";

export default function App() {
const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
    res.json().then((json) => {
      setTodos(json);
    })
  );
  }, []);
  return (
    <div>
      <h1>ToDos</h1>
      <div className="grid grid-cols-8 gap-2">
      {todos.map((todo: any) => (
        <ToDo title={todo.title} completed={todo.completed} />
      ))    
      }
      </div>
    </div>
  )
}
