import "../styles/Education.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./Form"

export default function Education({ education, setEducation }) {
  const [editIndex, setEditIndex] = useState(-1);

  const handleEducationChange = (input, value, index) => {
    const newEducation = education.map((edu, i) => {
      if (i == index) {
        return { ...edu, [input]: value };
      }
      return edu;
    });
    setEducation(newEducation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditIndex(-1);
  };

  const addNewEducation = () => {
    const newId = uuid();

    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        yearStart: "",
        yearEnd: "",
        location: "",
        id: newId,
      },
    ]);

    setEditIndex(newId);
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  return (
    <>
      {education.map((edu, index) => (
        <li key={edu.id}>
          <Form 
            item={edu}
            fields={[
              'school',
              'degree',
              'yearStart',
              'yearEnd',
              'location',
            ]}
            displayFields={
              ['school', 'degree']
            }
            handleChange={(input, value) => handleEducationChange(input, value, index)}
            isEditing={editIndex === edu.id}
            onClick={() => setEditIndex(edu.id)}
            onSubmit={handleSubmit}
          />
          <button onClick={() => deleteEducation(edu.id)}>Delete</button>
        </li>
      ))}
      {editIndex === -1 && (
        <button onClick={addNewEducation}>Add Education</button>
      )}
    </>
  );
}

function EducationForm({
  educationItem,
  index,
  changeHandler,
  isEditing,
  onClick,
  onSubmit,
}) {
  return (
    <>
      {isEditing ? (
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={educationItem.school}
              onChange={(e) => changeHandler("school", e.target.value, index)}
            />
            <input
              type="text"
              value={educationItem.degree}
              onChange={(e) => changeHandler("degree", e.target.value, index)}
            />
            <input
              type="text"
              value={educationItem.yearStart}
              onChange={(e) =>
                changeHandler("yearStart", e.target.value, index)
              }
            />
            <input
              type="text"
              value={educationItem.yearEnd}
              onChange={(e) => changeHandler("yearEnd", e.target.value, index)}
            />
            <input
              type="text"
              value={educationItem.location}
              onChange={(e) => changeHandler("location", e.target.value, index)}
            />
            <button type="submit">Done</button>
          </form>
        </div>
      ) : (
        <div onClick={onClick}>
          {educationItem.school}
          {educationItem.degree}
        </div>
      )}
    </>
  );
}
