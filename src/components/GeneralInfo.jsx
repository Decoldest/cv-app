import "../styles/General.css"

export default function GeneralInfo({ info, setInfo }) {
  const handleInfoChange = (input, value) => {
    const newInfo = { ...info, [input]: value };
    setInfo(newInfo);
  };

  return (
    <form className="general-container">
      <h1 className="header">General Information</h1>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        value={info.fullName}
        autoComplete="name"
        onChange={(e) => handleInfoChange("fullName", e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={info.email}
        autoComplete="email"
        onChange={(e) => handleInfoChange("email", e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        id="phone"
        value={info.phone}
        autoComplete="tel"
        onChange={(e) => handleInfoChange("phone", e.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={info.address}
        onChange={(e) => handleInfoChange("address", e.target.value)}
      />
    </form>
  );
}
