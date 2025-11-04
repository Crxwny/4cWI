
type Props = {
    title: string;
}

export default function list({title}: Props) {
  return (
    <div className="bg-blue-500 p-4 border-2 border-white w-40 text-white hover:bg-blue-700">{title}</div>
  )
}