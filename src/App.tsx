import { useState } from "react";
import { ChatApplication } from "./problems/problem_basic_react_chat_application";
import { Tabs } from "./problems/problem_tabs";
import { DigitalClock } from "./problems/problem_digital_clock";
import { Stopwatch } from "./problems/problem_stopwatch";
import { ModalDialogApp } from "./problems/problem_modal_dialog";
import { DataTable } from "./problems/problem_data_table";
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
  {
    id: "modal-dialog",
    label: "Modal Dialog",
    render: <ModalDialogApp />,
  },
  {
    id: "data-table",
    label: "Data Table",
    render: <DataTable />,
  },
];

function App() {
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
    </>
  );
}

export default App;
