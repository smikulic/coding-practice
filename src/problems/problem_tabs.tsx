import { useState } from "react";

const tabData = [
  {
    id: "html",
    label: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: "css",
    label: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    id: "js",
    label: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div>
      <div>
        {tabData.map((tab) => {
          return (
            <button
              style={{ color: activeTab === tab.id ? "blue" : "black" }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div>
        {tabData.map((tab) => {
          return tab.id === activeTab ? <p>{tab.content}</p> : null;
        })}
      </div>
    </div>
  );
}
