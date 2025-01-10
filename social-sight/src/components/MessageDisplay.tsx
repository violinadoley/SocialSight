// components/MessageDisplay.tsx
import React from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

interface MessageDisplayProps {
  messages: Message[];
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages }) => {
  return (
    <div className="space-y-2">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 rounded-md ${
            msg.sender === "user" ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-800"
          }`}
        >
          <p className="text-sm font-bold">{msg.sender.toUpperCase()}</p>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;
