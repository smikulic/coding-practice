// useState, useEffect, useCallback, useRef, useMemo, useEffect are already imported

import { useState } from "react";

export function ChatApplication() {
  const [messages, setMessages] = useState<any>([]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    // Implement message sending logic
    if (inputText.length > 0) {
      const newMessage = {
        id: Date.now(),
        timestamp: new Date().toDateString(),
        text: inputText,
      };

      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  const handleInputText = (e: any) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Create message container */}
      <div>
        {messages.map((message: any) => {
          return (
            <div key={message.id}>
              {message.timestamp}: {message.text}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        {/* Create input box */}
        <input
          type="text"
          placeholder="Type a message..."
          style={{ width: "94%" }}
          onChange={handleInputText}
          value={inputText}
          onKeyPress={handleKeyPress}
        />
        {/* Create send button */}
        <button
          style={{ padding: "6px", color: "white", background: "green" }}
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

// render(<ChatApplication />);
