export default function Dropdown({ name, children }) {
  const handleOpen = () => {};

  return (
    <>
      <div>{name}</div>
      <div>{children}</div>
    </>
  );
}
