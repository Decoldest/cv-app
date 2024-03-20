import "../styles/Output.css";

export default function Output({ info, experience, education }) {
  return (
    <div className="output-container">
      <section>
        <h1>{info.fullName}</h1>
        <div className="additional-details">
          <h3>{info.email}</h3>
          <h3>{info.phone}</h3>
          <h3>{info.address}</h3>
        </div>
      </section>
      <section>
        {education.map((edu) => (
          <div className="education-section" key={edu.id}>
            <div className="education-left">
              <h4>
                {edu.yearStart} {edu.yearEnd ? "-" : ""} {edu.yearEnd}
              </h4>
              <h4>{edu.location}</h4>
            </div>
            <div className="education-right">
              <h4>{edu.school}</h4>
              <h4>{edu.degree}</h4>
            </div>
          </div>
        ))}
      </section>
      <section>
        {experience.map((exp) => (
          <div className="experience-section" key={exp.id}>
            <h4>{exp.company}</h4>
            <h4>{exp.position}</h4>
            <h4>
              {exp.yearStart} {exp.yearEnd ? "-" : ""} {exp.yearEnd}
            </h4>
            <h4>{exp.location}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
