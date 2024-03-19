import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";

const defaultGeneralInfo = {
  fullName: "Guy",
  email: "mail@mail.com",
  phone: "122-555-1556",
  address: "11 Home Street",
};

const defaultExperience = [
  {
    school: "State Tech Ag Central College Tech",
    degree: "Bachelors in Agriculture",
    yearStart: "11/03/2020",
    yearEnd: "Present",
    location: "Quahog",
  },
];

export default function App() {
  const [info, setInfo] = useState(defaultGeneralInfo);
  const [experience, setExperience] = useState(defaultExperience);

  return (
    <div className="main-card">
      <Input info={info} setInfo={setInfo} experience={experience} setExperience={setExperience}/>
      <Output info={info} />
    </div>
  );
}
