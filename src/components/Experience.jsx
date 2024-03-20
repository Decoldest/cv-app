import "../styles/Experience.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Experience({ experience, setExperience }) {
  const [editIndex, setEditIndex] = useState(-1);

  const handleExperienceChange = (input, value, index) => {
    const newExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [input]: value };
      }
      return exp;
    });
    setExperience(newExperience);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditIndex(-1);
  };

  const addNewExperience = () => {
    const newId = uuid();

    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        yearStart: "",
        yearEnd: "",
        location: "",
        description: "",
        id: newId,
      },
    ]);

    setEditIndex(newId);
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  return (
    <>
      {experience.map((exp, index) => (
        <li key={exp.id}>
          <ExperienceForm
            experienceItem={exp}
            index={index}
            handleExperienceChange={handleExperienceChange}
            isEditing={editIndex === exp.id}
            onClick={() => setEditIndex(exp.id)}
            onSubmit={handleSubmit}
          />
          <button onClick={() => deleteExperience(exp.id)}>Delete</button>
        </li>
      ))}
      {editIndex === -1 && (
        <button onClick={addNewExperience}>Add Experience</button>
      )}
    </>
  );
}

function ExperienceForm({
  experienceItem,
  index,
  handleExperienceChange,
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
              value={experienceItem.company}
              onChange={(e) =>
                handleExperienceChange("company", e.target.value, index)
              }
            />
            <input
              type="text"
              value={experienceItem.position}
              onChange={(e) =>
                handleExperienceChange("position", e.target.value, index)
              }
            />
            <input
              type="text"
              value={experienceItem.yearStart}
              onChange={(e) =>
                handleExperienceChange("yearStart", e.target.value, index)
              }
            />
            <input
              type="text"
              value={experienceItem.yearEnd}
              onChange={(e) =>
                handleExperienceChange("yearEnd", e.target.value, index)
              }
            />
            <input
              type="text"
              value={experienceItem.location}
              onChange={(e) =>
                handleExperienceChange("location", e.target.value, index)
              }
            />
            <input
              type="text"
              value={experienceItem.description}
              onChange={(e) =>
                handleExperienceChange("description", e.target.value, index)
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
