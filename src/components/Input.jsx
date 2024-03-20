import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";

export default function Input({ info, setInfo, education, setEducation, experience, setExperience }) {
  return (
    <>
      <div className="card">
        <GeneralInfo info={info} setInfo={setInfo} />
        <Education education={education} setEducation={setEducation}/>
        <Experience experience={experience} setExperience={setExperience}/>
      </div>
    </>
  );
}
