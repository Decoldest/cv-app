import "../styles/Education.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Form from "./Form";

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
            fields={["school", "degree", "yearStart", "yearEnd", "location"]}
            displayFields={["school", "degree"]}
            handleChange={(input, value) =>
              handleEducationChange(input, value, index)
            }
            isEditing={editIndex === edu.id}
            onClick={() => setEditIndex(edu.id)}
            onSubmit={handleSubmit}
          />
          {editIndex === -1 && (
            <button onClick={() => deleteEducation(edu.id)}>Delete</button>
          )}
        </li>
      ))}
      {editIndex === -1 && (
        <button onClick={addNewEducation}>Add Education</button>
      )}
    </>
  );
}
