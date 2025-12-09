type Props = {
    title: string;
    id: number;
    completed: boolean;
}

export default function ToDoCard({title, id, completed}: Props) {
  return (
    <div className={`border p-4 rounded-xl ${completed ? 'bg-green-500' : 'bg-red-500'}`}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{completed ? "done" : "not done"}</div>
    </div>
  )
}   