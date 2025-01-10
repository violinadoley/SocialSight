// components/ChatForm.tsx
"use client";

import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

interface ChatFormProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatForm: React.FC<ChatFormProps> = ({ onSend, isLoading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          isLoading ? "AI is thinking..." : "Type your message here..."
        }
        className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className={`px-4 py-2 rounded-lg text-white flex items-center transition-all ${
          isLoading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-[#4FD1C5] hover:bg-[#3BB6AB] text-black"
        }`}
      >
        <FiSend />
        Send
      </button>
    </form>
  );
};

export default ChatForm;
