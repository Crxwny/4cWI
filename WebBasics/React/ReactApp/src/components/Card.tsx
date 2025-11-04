import { useState } from 'react';

type Props = {
    name: string;
    job: string;
}

export default function Card({ name, job }: Props) {
    const [amountOfClicks, setAmountOfClicks] = useState(0);
    let style = amountOfClicks > 5 ? "bg-green-500" : "bg-white";
  return (
    <div className={`${style} overflow-hidden w-64 border-1 cursor-pointer`} onClick={() => setAmountOfClicks(amountOfClicks + 1)}>
      <div className="w-full">
        <img 
          src="/img_avatar.png" 
          className="w-full h-auto"
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold text-black mb-1">{name}</h1>
        <p className="text-base text-black">{job}</p>
      </div>
      <div className="p-4">Amount of clicks: {amountOfClicks}</div>
    </div>
  )
}

