type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export default function Counter({ count, onIncrement, onDecrement, onReset }: Props) {
    let style = count >= 10 ? "bg-green-500" : "bg-white";
    return (
        <div className={`${style} overflow-hidden w-64 border-1 flex flex-col items-center justify-center`}>
            <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={onIncrement}>+</button>
            <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={onDecrement}>-</button>
            <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={onReset}>Reset</button>
            <div className="p-4">Count: {count}</div>
        </div>
  )
}