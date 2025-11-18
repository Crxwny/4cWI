type Props = {
  onPress: () => void;
  isOn: boolean;
}

export default function Lightswitch({ onPress, isOn }: Props) {
    
  return (
    <div className={`flex flex-col items-center justify-center w-64 h-64 ${isOn ? 'bg-yellow-400' : 'bg-gray-400'}`}>
      <div
        className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 m-2 text-center cursor-pointer"
        onClick={onPress}
      >
        Toggle
      </div>
      <div className="text-4xl mb-4">💡</div>
    </div>
  )
}