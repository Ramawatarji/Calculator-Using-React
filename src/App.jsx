import style from "./App.module.css";
import Display from "./component/display"; // Ensure the correct import path
import Button from "./component/Button";
import { useState } from "react";

function App() {
  const btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "=", "clear"];
  let [data, setdata] = useState("");

  const cal = (value) => {
    // let value = event.target.firstChild.data;
    // debugger;
    // let value = btns;
    if (value === "clear") {
      setdata("");
    } else if (value === "=") {
      try {
        const result = eval(data);
        setdata(result);
      } catch (error) {
        console.error("Invalid expression:", error);
        setData("Error");
      }
    } else {
      let newdisplaydata = data + value;
      setdata(newdisplaydata);
    }
    //  let num2 = [...data, value];
    //setdata(num2);
    console.log(value);
  };

  return (
    <div className={style.container}>
      <Display data={data} />
      <Button item={btn} method={cal} />
    </div>
  );
}
export default App;
