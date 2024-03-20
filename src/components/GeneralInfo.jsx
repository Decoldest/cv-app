export default function GeneralInfo({ info, setInfo }) {
  const handleInfoChange = (input, value) => {
    const newInfo = { ...info, [input]: value };
    setInfo(newInfo);
  };

  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={info.fullName}
        onChange={(e) => handleInfoChange("fullName", e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={info.email}
        onChange={(e) => handleInfoChange("email", e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        name="phone"
        value={info.phone}
        onChange={(e) => handleInfoChange("phone", e.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        value={info.address}
        onChange={(e) => handleInfoChange("address", e.target.value)}
      />
    </>
  );
}
