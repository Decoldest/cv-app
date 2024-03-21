import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";
import Styling from "./Styling";
import Dropdown from "./Dropdown";
import "../styles/Input.css";

export default function Input({
  info,
  setInfo,
  education,
  setEducation,
  experience,
  setExperience,
  style,
  setStyle,
}) {
  return (
    <>
      <div className="input-container">
        <div className="general-container">
          <GeneralInfo info={info} setInfo={setInfo} />
        </div>
        <div className="education-container">
          <Dropdown name="Education">
            <Education education={education} setEducation={setEducation} />
          </Dropdown>
        </div>
        <div className="experience-container">
          <Dropdown name="Experience">
            <Experience experience={experience} setExperience={setExperience} />
          </Dropdown>
        </div>
        <div className="style-container">
          <Styling style={style} setStyle={setStyle} />
        </div>
      </div>
    </>
  );
}
