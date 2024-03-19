export default function GeneralInfo({ info, setInfo }) {
  const handleInputChange = (key, value) => {
    const newInfo = { ...info, [key]: value };
    setInfo(newInfo);
  };

  return (
    <>
      <input type="text" value={info.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} />
      <input type="text" value={info.email} onChange={(e) => handleInputChange("email", e.target.value)} />
      <input type="text" value={info.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
      <input type="text" value={info.address} onChange={(e) => handleInputChange("address", e.target.value)} />
    </>
  );
}
