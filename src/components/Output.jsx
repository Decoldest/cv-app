export default function Output({ info, experience, education }) {
  return (
    <>
      <section>
        <div className="card">
          <h1>{info.fullName}</h1>
          <h2>{info.email}</h2>
          <h2>{info.phone}</h2>
          <h2>{info.address}</h2>
        </div>
      </section>
      <section>
        {education.map((edu) => (
          <div className="card" key={edu.id}>
            <h4>{edu.school}</h4>
            <h4>{edu.degree}</h4>
            <h4>{edu.yearStart} {edu.yearEnd ? "-" : "" } {edu.yearEnd}</h4>
            <h4>{edu.location}</h4>
          </div>
        ))}
      </section>
      <section>
        {experience.map((exp) => (
          <div className="card" key={exp.id}>
            <h4>{exp.company}</h4>
            <h4>{exp.position}</h4>
            <h4>{exp.yearStart} {exp.yearEnd ? "-" : "" } {exp.yearEnd}</h4>
            <h4>{exp.location}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
