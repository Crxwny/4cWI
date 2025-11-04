import React from 'react'

type Props = {
    title: string;
    description: string;
}

export default function Card({title, description}: Props) {
  return (
    <div>
    <div className="bg-blue-500" border-2 border-black>Card</div>
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}