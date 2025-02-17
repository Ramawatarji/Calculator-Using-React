import style from "./display.module.css";
const Display = ({ data }) => {
  return (
    <>
      <input
        className={style.display}
        type="text"
        value={data}

        // onChange={cal}
      />
    </>
  );
};
export default Display;
