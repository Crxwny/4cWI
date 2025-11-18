import { useState } from "react";

type Props = {}

export default function Counter({}: Props) {
    const [count, setCount] = useState(0);
    let style = count >= 10 ? "bg-green-500" : "bg-white";
    return (
        <div className={`${style} overflow-hidden w-64 border-1 flex flex-col items-center justify-center`}>
            <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={() => setCount(count + 1)}>+</button>
            <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={() => setCount(count - 1)}>-</button>
            <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={() => setCount(0)}>Reset</button>
            <div className="p-4">Count: {count}</div>
        </div>
  )
}