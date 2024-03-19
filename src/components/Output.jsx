export default function Output({ info}) {

  return (
    <>
      <h1>{info.fullName}</h1>
      <h2>{info.email}</h2>
      <h2>{info.phone}</h2>
      <h2>{info.address}</h2>
    </>
  );
}
