import { useState } from "react";
import Output from "./Output";
import Input from "./Output";

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
      <Output info={info} setInfo={setInfo} />
    </>
  );
}
