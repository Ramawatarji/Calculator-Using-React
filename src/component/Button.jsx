import css from "./Button.module.css";
const Button = ({ item, method }) => {
  // let my = (event) => console.log(event.target.firstChild.data);
  /* const bb = item.map((obj, index) => {
    return (
      <button key={index} className={css.btn} onClick={my}>
        {obj}
      </button>
    );
  });*/
  // <>{<div className={css.btn}>{bb}</div>}</>;
  return (
    <div className={css.btn}>
      {item.map((obj, index) => (
        <button key={index} className={css.btn} onClick={() => method(obj)}>
          {obj}
        </button>
      ))}
    </div>
  );
};
export default Button;
