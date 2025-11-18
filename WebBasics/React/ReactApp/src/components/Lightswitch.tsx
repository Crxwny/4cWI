import { useState } from "react";

type Props = {}

export default function Lightswitch({}: Props) {
    const [isOn, setIsOn] = useState(false);
    let style = isOn ? "bg-yellow-500" : "bg-gray-500";
  return (
    <div className={`${style} flex flex-col items-center justify-center w-64 h-64`}>
        <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer" onClick={() => setIsOn(!isOn)}>Toggle</button>
        <div className="text-4xl mb-4"   >💡</div>
    </div>
  )
}