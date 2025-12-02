type Props = {
  name: string;
  avatar: string;
  jobTitle: string;
}

export default function Person({name, avatar, jobTitle}: Props) {
  return (
    <div className="border p-4 bg-white rounded-lg shadow-md">
      <img src={avatar} alt={name} className="w-full h-48 object-cover rounded mb-2" />
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-600 text-sm">{jobTitle}</div>
    </div>
  )
}
