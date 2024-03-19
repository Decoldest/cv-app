import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";

export default function App() {
  const [info, setInfo] = useState({
    fullName: "Guy",
    email: "mail@mail.com",
    phone: "122-555-1556",
    address: "11 Home Street",
  });

  return (
    <>
      <Input info={info} setInfo={setInfo} />
      <Output info={info} />
    </>
  );
}
