
import Person from "./components/Person";
import { useEffect, useState } from "react";

type PersonData = {
  id: string;
  name: string;
  avatar: string;
  jobTitle: string;
  createdAt: string;
}

export default function App() {
const [persons, setPersons] = useState<PersonData[]>([]);

  useEffect(() => {
    fetch("https://6909e9651a446bb9cc209098.mockapi.io/person").then((res)=>
    res.json().then((json) => {
      setPersons(json);
    })
  );
  }, []);
  return (
    <div>
      <h1>Personen</h1>
      <div className="grid grid-cols-8 gap-2">
      {persons.map((person) => (
        <Person name={person.name} avatar={person.avatar} jobTitle={person.jobTitle} />
      ))    
      }
      </div>
    </div>
  )
}
