import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";
import type { Todo } from "./types";

type Props = {
    search: string;
}

export default function ToDoList({search}: Props) {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
            setTodos(json);
            setFilteredTodos(json);
        })
    }, []);


    useEffect(() => {
        let result = todos.filter((todo: Todo) => todo.title.includes(search));
        setFilteredTodos(result);
    }, [search]);

  return (
    <div className= "grid grid-cols-5 gap-2">
    {filteredTodos.map((todo: Todo) => (
        <ToDoCard 
        completed={todo.completed}
        title={todo.title} 
        id={todo.id} 
        key={todo.id} />
    ))}
    </div>
  );
}