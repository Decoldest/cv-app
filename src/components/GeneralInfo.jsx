export default function GeneralInfo({ info, setInfo }) {
  const handleNameChange = (event) => {
    const newInfo = { ...info, fullName: event.target.value };
    setInfo(newInfo);
  };
  const handleEmailChange = (event) => {
    const newInfo = { ...info, address: event.target.value };
    setInfo(newInfo);
  };
  const handleAddressChange = (event) => {
    const newInfo = { ...info, address: event.target.value };
    setInfo(newInfo);
  };

  return (
    <>
      <Personal
        fullName={info.fullName}
        nameChange={handleNameChange}
        email={info.email}
        emailChange={handleEmailChange}
        address={info.address}
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
