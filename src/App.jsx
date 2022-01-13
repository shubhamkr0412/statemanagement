import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const addOne = (e) => {
    // setCount(count + e);
    setCount((prev) => {
      if (prev == 10) {
        return 0;
      }
      return prev + e;
    });
  };
  if (count > 10) {
    return <div> You have Reached the maximum limit</div>;
  }

  return (
    <div className="App">
      <h3>Counter : {count}</h3>
      {/* {count < 10 && (
        <div>
          <button onClick={() => addOne(1)}>ADD ONE</button>

          <button onClick={() => addOne(-1)}>SUB ONE</button>
        </div>
      )} */}
      <div>
        <button onClick={() => addOne(1)}>ADD ONE</button>

        <button onClick={() => addOne(-1)}>SUB ONE</button>
      </div>
      <div>Counter is {count % 2 == 0 ? "Even" : "Odd"}</div>
    </div>
  );
}

export default App;
