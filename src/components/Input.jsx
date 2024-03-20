import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";
import "../styles/Input.css";

export default function Input({
  info,
  setInfo,
  education,
  setEducation,
  experience,
  setExperience,
}) {
  return (
    <>
      <div className="input-container">
        <div className="general-container">
          <GeneralInfo info={info} setInfo={setInfo} />
        </div>
        <div className="education-container">
          <Education education={education} setEducation={setEducation} />
        </div>
        <div className="experience-container">
          <Experience experience={experience} setExperience={setExperience} />
        </div>
      </div>
    </>
  );
}
