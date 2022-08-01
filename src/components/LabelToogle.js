import WithToogle from "../shared/WithToogle";

const LabelToogle = ({ toogle, toogleStatus, title }) => {
  return (
    <div>
      {toogleStatus ? (
        <input type="text" value={title} />
      ) : (
        <span> {title}</span>
      )}

      <div>
        <button onClick={toogle}> {toogleStatus ? "cancel" : "edit"} </button>
      </div>
    </div>
  );
};

export default WithToogle(LabelToogle);
