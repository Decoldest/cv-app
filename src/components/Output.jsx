import "../styles/Output.css";

export default function Output({ info, experience, education }) {
  return <Harvard info={info} experience={experience} education={education} />;
}

function Harvard({ info, experience, education }) {
  return (
    <div className="output-container harvard">
      <section>
        <h1 className="name">{info.fullName}</h1>
        <div className="additional-details-harvard">
          <h3>{info.address}</h3> | <h3>{info.phone}</h3> |{" "}
          <h3>{info.email}</h3>
        </div>
      </section>
      <div className="cv-content">
        <h2>EDUCATION</h2>
        <section>
          {education.map((edu) => (
            <div className="education-section harvard" key={edu.id}>
              <div className="education-harvard">
                <h4 className="output-bold harvard">{edu.school}</h4>
                <h4>
                  {edu.yearStart} {edu.yearEnd ? "-" : ""} {edu.yearEnd}
                </h4>
              </div>
              <h4>{edu.degree}</h4>
            </div>
          ))}
        </section>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <section>
          {experience.map((exp) => (
            <div className="experience-section harvard" key={exp.id}>
              <div className="experience-harvard">
                <h4 className="output-bold harvard">{exp.company}</h4>
                <h4>
                  {exp.yearStart} {exp.yearEnd ? "-" : ""} {exp.yearEnd}
                </h4>
              </div>
              <h4 className="position-harvard">{exp.position}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Modern({ info, experience, education }) {
  return (
    <div className="output-container">
      <section>
        <h1 className="name">{info.fullName}</h1>
        <div className="additional-details">
          <h3>{info.email}</h3>
          <h3>{info.phone}</h3>
          <h3>{info.address}</h3>
        </div>
      </section>
      <div className="cv-content">
        <h2>Education</h2>
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
                <h4 className="output-bold">{edu.school}</h4>
                <h4>{edu.degree}</h4>
              </div>
            </div>
          ))}
        </section>
        <h2>Professional Experience</h2>
        <section>
          {experience.map((exp) => (
            <div className="experience-section" key={exp.id}>
              <div className="experience-left">
                <h4>
                  {exp.yearStart} {exp.yearEnd ? "-" : ""} {exp.yearEnd}
                </h4>
                <h4>{exp.location}</h4>
              </div>
              <div className="experience-right">
                <h4 className="output-bold">{exp.company}</h4>
                <h4>{exp.position}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
