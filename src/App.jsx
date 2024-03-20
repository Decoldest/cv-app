import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import { v4 as uuid } from 'uuid';


const defaultGeneralInfo = {
  fullName: "Guy",
  email: "mail@mail.com",
  phone: "122-555-1556",
  address: "11 Home Street",
  id: uuid(),
};

const defaultExperience = [
  {
    company: "Classified",
    position: "Special Intelligence",
    yearStart: "01/01/1992",
    yearEnd: "12/12/2004",
    location: "Kiev",
    description: "None",
    id: uuid(),
  },
  {
    company: "WcDonald's",
    position: "Burger Flipper",
    yearStart: "01/02/2024",
    yearEnd: "present",
    location: "WcDonald's Headquarters, Chicago, IL",
    description: "Flipped burgers, what else",
    id: uuid(),
  },
];

const defaultEducation = [
  {
    school: "State Tech Ag Central College Tech",
    degree: "Bachelors in Agriculture",
    yearStart: "11/03/2020",
    yearEnd: "10/04/2021",
    location: "Quahog",
    id: uuid(),
  },
]

export default function App() {
  const [info, setInfo] = useState(defaultGeneralInfo);
  const [experience, setExperience] = useState(defaultExperience);

  return (
    <div className="main-card">
      <Input info={info} setInfo={setInfo} experience={experience} setExperience={setExperience}/>
      <Output info={info} experience={experience} />
    </div>
  );
}
