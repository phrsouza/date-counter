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
    <div className="inline-block space-y-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Date counter
      </h1>
      <div className="grid grid-cols-3 place-items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decreaseStep}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increaseStep}
        >
          +
        </button>
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decreaseCount}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
      <div>
        <span className="">
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{`${date.toDateString()}`}</span>
      </div>
    </div>
  );
}

export default App;
