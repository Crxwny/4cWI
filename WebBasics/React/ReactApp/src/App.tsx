import Card from "./components/Card";

export default function App() {
    return (
        <div>
            <h1>App</h1>
        <div className="grid grid-cols-3 gap-4 ">  
        <Card title="Card 1" description="This is a card" />  
        <Card title="Card 2" description="This is a card" />  
        <Card title="Card 3" description="This is a card" />   
        </div>
        </div>
    )
}