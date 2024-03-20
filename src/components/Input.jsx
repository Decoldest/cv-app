import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";

export default function Input({ info, setInfo, experience, setExperience, education, setEducation }) {
  return (
    <>
      <div className="card">
        <GeneralInfo info={info} setInfo={setInfo} />
        <Experience experience={experience} setExperience={setExperience}/>
        <Education education={education} setEducation={setEducation}/>
      </div>
    </>
  );
}
