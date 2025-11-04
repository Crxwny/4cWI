
type Props = {
  text: string
}

export default function Button({ text }: Props) {
  return (
    <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 text-center cursor-pointer">
      {text}
    </button>
  )
}
