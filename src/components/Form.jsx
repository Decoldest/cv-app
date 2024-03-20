import React from "react";

function Form({
  item,
  fields,
  displayFields,
  handleChange,
  isEditing,
  onClick,
  onSubmit,
}) {
  return (
    <>
      {isEditing ? (
        <div>
          <form onSubmit={onSubmit}>
            {fields.map((field) => (
              <input
                key={field}
                type="text"
                value={item[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            ))}
            <button type="submit">Done</button>
          </form>
        </div>
      ) : (
        <div onClick={onClick}>
          {displayFields.map((field) => (
            <div key={field}>{item[field]}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default Form;
