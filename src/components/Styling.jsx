import "../styles/Styling.css";

export default function Styling({ style, setStyle }) {
  return (
    <>
      <div>Change Style Template</div>
      <div>
        <button
          className={style === "Harvard" ? "selected" : ""}
          onClick={() => setStyle("Harvard")}
        >
          Harvard
        </button>
        <button
          className={style === "Modern" ? "selected" : ""}
          onClick={() => setStyle("Modern")}
        >
          Modern
        </button>
      </div>
    </>
  );
}
