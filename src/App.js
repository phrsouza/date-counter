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

  function handleStepChange(value) {
    setStep(value);
  }

  function handleCountChange(value) {
    if (Number.isNaN(value)) return;

    setCount(value);
  }

  function decreaseCount() {
    setCount((s) => s - step);
  }

  function increaseCount() {
    setCount((s) => s + step);
  }

  function resetValues() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="inline-block space-y-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Date counter
      </h1>
      <div className="grid grid-rows-2-3 place-items-center">
        <span>Step: {step}</span>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => handleStepChange(Number(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decreaseCount}
        >
          -
        </button>
        <input
          className=" appearance-none border-2 border-blue-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={count}
          onChange={(e) => handleCountChange(Number(e.target.value))}
        />
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
      <button
        hidden={count === 0 && step === 1}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetValues}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
