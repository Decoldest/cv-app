export default function Form({
  item,
  index,
  handleChange,
  isEditing,
  onClick,
  onSubmit,
  defaultDisplay,
}) {
  return (
    <>
      {isEditing ? (
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={item.company}
              onChange={(e) =>
                handleChange("company", e.target.value, index)
              }
            />
            <input
              type="text"
              value={item.position}
              onChange={(e) =>
                handleChange("position", e.target.value, index)
              }
            />
            <input
              type="text"
              value={item.yearStart}
              onChange={(e) =>
                handleChange("yearStart", e.target.value, index)
              }
            />
            <input
              type="text"
              value={item.yearEnd}
              onChange={(e) =>
                handleChange("yearEnd", e.target.value, index)
              }
            />
            <input
              type="text"
              value={item.location}
              onChange={(e) =>
                handleChange("location", e.target.value, index)
              }
            />
            <input
              type="text"
              value={item.description}
              onChange={(e) =>
                handleChange("description", e.target.value, index)
              }
            />
            <button type="submit">Done</button>
          </form>
        </div>
      ) : (
        <div onClick={onClick}>
          {experienceItem.company}
          {experienceItem.position}
        </div>
      )}
    </>
  );
}