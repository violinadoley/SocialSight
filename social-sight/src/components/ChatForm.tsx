// components/ChatForm.tsx
"use client";

import React, { useState } from "react";

interface ChatFormProps {
  onSend: (message: string) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form className="flex space-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
