import { useState } from "react";

import GeneralInfo from './GeneralInfo'


export default function Output() {
  const [person, setPerson] = useState({
    fullName: "Guy",
    email: "mail@mail.com",
    phone: "122-555-1556",
    address: "11 Home Street",
  });

  return (
    <>
    <h1>{person.fullName}</h1>
    <GeneralInfo 
      person={person}
      setPerson={setPerson}
    />
    </>
    
  );
}
