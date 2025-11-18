import { useState } from "react";
import "./App.css";
import Lightswitch from "./components/Lightswitch";
import Counter from "./components/Counter";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Lightswitch onPress={() => setIsOn(!isOn)} isOn={isOn}/>
      <p>The light is {isOn ? "on" : "off"}.</p>
      <Counter 
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
        onReset={() => setCount(0)}
      />
    </div>
  );
}