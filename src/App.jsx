import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import { v4 as uuid } from "uuid";
import "./App.css";

const defaultGeneralInfo = {
  fullName: "Guy",
  email: "mail@mail.com",
  phone: "122-555-1556",
  address: "Schmoneyville",
  id: uuid(),
};

const defaultExperience = [
  {
    company: "Classified",
    position: "Special Intelligence",
    yearStart: "01/1992",
    yearEnd: "12/2004",
    location: "Puerto Rico",
    description: "None",
    id: uuid(),
  },
  {
    company: "WcDonald's",
    position: "Burger Flipper",
    yearStart: "02/2024",
    yearEnd: "present",
    location: "WcDonald's Headquarters",
    description: "Flipped burgers, what else",
    id: uuid(),
  },
];

const defaultEducation = [
  {
    school: "State Tech Ag Central College Tech",
    degree: "Bachelors in Agriculture",
    yearStart: "03/2020",
    yearEnd: "04/2021",
    location: "Quahog",
    id: uuid(),
  },
];

export default function App() {
  const [info, setInfo] = useState(defaultGeneralInfo);
  const [experience, setExperience] = useState(defaultExperience);
  const [education, setEducation] = useState(defaultEducation);
  const [style, setStyle] = useState("Harvard");

  return (
    <div className="main-card">
      <Input
        info={info}
        setInfo={setInfo}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
        style={style}
        setStyle={setStyle}
      />
      <Output info={info} experience={experience} education={education} style={style} />
    </div>
  );
}
