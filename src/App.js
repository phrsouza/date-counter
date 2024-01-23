import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <>
      <h1>Date counter</h1>
      <div>
        <button>-1</button>
        <span>Step: 0</span>
        <button>+1</button>
      </div>

      <div>
        <button>-1</button>
        <span>Count: 0</span>
        <button>+1</button>
      </div>
      <p>{new Date().toDateString()}</p>
    </>
  );
}

export default App;
