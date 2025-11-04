import CardV2 from "./CardV2";
import { useState, useEffect } from "react";

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://6909e9651a446bb9cc209098.mockapi.io/person").then(
            (res) => res.json()).then(data => setPeople(data));
    }, []);

    return (
        <div>
            <h1>People</h1>
            <div className="w-40"></div>
        </div>
    )
}