import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";
import Styling from "./Styling";
import "../styles/Input.css";

export default function Input({
  info,
  setInfo,
  education,
  setEducation,
  experience,
  setExperience,
  style,
  setStyle
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
        <div className="style-container">
          <Styling  style={style} setStyle={setStyle} />
        </div>
      </div>
    </>
  );
}
