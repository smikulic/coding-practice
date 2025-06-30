import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ChatApplication } from "./problems/problem_basic_react_chat_application";
import { Tabs } from "./problems/problem_tabs";
import { DigitalClock } from "./problems/problem_digital_clock";
import { Stopwatch } from "./problems/problem_stopwatch";
import "./App.css";

const problems = [
  {
    id: "chat",
    label: "Chat",
    render: <ChatApplication />,
  },
  {
    id: "tabs",
    label: "Tabs",
    render: <Tabs />,
  },
  {
    id: "digital-clock",
    label: "Digital Clock",
    render: <DigitalClock />,
  },
  {
    id: "stopwatch",
    label: "Stopwatch",
    render: <Stopwatch />,
  },
];

function App() {
  // const [count, setCount] = useState(0)
  const [activeProblem, setActiveProblem] = useState("chat");

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ borderRight: "1px solid" }}>
          {problems.map((problem) => {
            return (
              <div
                key={problem.id}
                onClick={() => setActiveProblem(problem.id)}
                style={{
                  width: "200px",
                  padding: "4px",
                  cursor: "pointer",
                  color: problem.id === activeProblem ? "blue" : "black",
                }}
              >
                {problem.label}
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "100%",
            padding: "16px",
          }}
        >
          {problems.map((problem) => {
            if (problem.id === activeProblem) {
              return (
                <div key={problem.id}>
                  <h5>{problem.label}</h5>
                  {problem.render}
                </div>
              );
            }
          })}
        </div>
      </div>


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
