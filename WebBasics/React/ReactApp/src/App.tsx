import List from "./components/list";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
    return (
        <div>
        <ul>
          <li><List title="Coffee" /></li>
          <li><List title="Tea" /></li>
          <li><List title="Beer" /></li>
        </ul>
        <Button text="Sendar" />
        <Card name="John Doe" job="Developer" />
        </div>
    )
}