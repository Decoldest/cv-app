export default function GeneralInfo({ info, setInfo }) {
  const handleInfoChange = (input, value) => {
    const newInfo = { ...info, [input]: value };
    setInfo(newInfo);
  };

  return (
    <>
      <input type="text" value={info.fullName} onChange={(e) => handleInfoChange("fullName", e.target.value)} />
      <input type="text" value={info.email} onChange={(e) => handleInfoChange("email", e.target.value)} />
      <input type="text" value={info.phone} onChange={(e) => handleInfoChange("phone", e.target.value)} />
      <input type="text" value={info.address} onChange={(e) => handleInfoChange("address", e.target.value)} />
    </>
  );
}
