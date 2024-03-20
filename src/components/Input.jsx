import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";

export default function Input({ info, setInfo, experience, setExperience }) {
  return (
    <>
      <div className="card">
        <GeneralInfo info={info} setInfo={setInfo} />
        <Experience experience={experience} setExperience={setExperience}/>
      </div>
    </>
  );
}
