import GeneralInfo from "./GeneralInfo";

export default function Input({ info, setInfo, experience, setExperience }) {
  return (
    <>
      <div className="card">
        <GeneralInfo info={info} setInfo={setInfo} />
      </div>
    </>
  );
}
