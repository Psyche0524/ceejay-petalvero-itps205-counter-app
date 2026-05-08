import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <div className="container">

      <div className="box">
        <h2 className="heading">Counter</h2>

        <p className="count-number">{count}</p>

        <div className="button-row">
          <button className="btn-decrease" onClick={handleDecrease}>
            − Decrease
          </button>
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn-increase" onClick={handleIncrease}>
            + Increase
          </button>
        </div>

        {count >= 5 && (
          <p className="goal-msg">🏆 Goal Reached!</p>
        )}
      </div>

      <div className="box">
        <h2 className="heading">Live Message</h2>

        <input
          className="input"
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={handleInput}
        />

        <p className="msg-display">
          {text === "" ? "Your message will appear here..." : text}
        </p>
      </div>

    </div>
  );
}

export default App;