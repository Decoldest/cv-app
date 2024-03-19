import { useState } from "react";

export default function GeneralInfo({person, setPerson}) {
 

  const handleNameChange = (event) => {
    const newPerson = { ...person, fullName: event.target.value };
    setPerson(newPerson);
  };
  const handleEmailChange = (event) => {
    const newPerson = { ...person, address: event.target.value };
    setPerson(newPerson);
  };
  const handleAddressChange = (event) => {
    const newPerson = { ...person, address: event.target.value };
    setPerson(newPerson);
  };

  return (
    <>
      <Personal
        fullName={person.fullName}
        nameChange={handleNameChange}
        email={person.email}
        emailChange={handleEmailChange}
        address={person.address}
        addressChange={handleAddressChange}
      ></Personal>
    </>
  );
}

function Personal({
  fullName,
  nameChange,
  email,
  emailChange,
  address,
  addressChange,
}) {
  return (
    <>
      <input type="text" defaultValue={fullName} onChange={nameChange} />
      <input type="text" defaultValue={email} onChange={emailChange} />
      <input type="text" defaultValue={address} onChange={addressChange} />
    </>
  );
}
