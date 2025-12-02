type Props = {
  title: string;
  completed: boolean;
}

export default function ToDo({title, completed}: Props) {
  return (
    <div className = {`border p-4 ${completed ? 'bg-green-500' : 'bg-red-500'}`}>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  )
}