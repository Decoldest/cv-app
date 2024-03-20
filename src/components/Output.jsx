export default function Output({ info, experience }) {
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
        {experience.map((exp) => (
          <div className="card" key={exp.id}>
            <h1>{exp.company}</h1>
            <h2>{exp.position}</h2>
            <h2>{exp.yearStart} {exp.yearEnd ? "-" : "" } {exp.yearEnd}</h2>
            <h2>{exp.location}</h2>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
