import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    setDate(newDate);
  }, [count]);

  function decreaseStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseCount() {
    setCount((s) => s - step);
  }

  function increaseCount() {
    setCount((s) => s + step);
  }

  return (
    <>
      <h1>Date counter</h1>
      <div>
        <button onClick={decreaseStep}>-1</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+1</button>
      </div>

      <div>
        <button onClick={decreaseCount}>-1</button>
        <span>Count: {count}</span>
        <button onClick={increaseCount}>+1</button>
      </div>
      <p>{`${date.toDateString()}`}</p>
    </>
  );
}

export default App;
