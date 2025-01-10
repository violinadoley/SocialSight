// components/MessageDisplay.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "ai";
  text: string;
}

interface MessageDisplayProps {
  messages: Message[];
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col space-y-3 overflow-y-auto max-h-[60vh] p-4 bg-[#0F0F15] rounded-md shadow-inner border border-gray-800">
      {messages.map((msg, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 rounded-lg max-w-[75%] ${
              msg.sender === "user"
                ? "bg-[#4FD1C5] text-black"
                : "bg-gray-700 text-gray-100"
            }`}
          >
            <p className="text-sm mb-1 font-semibold">
              {msg.sender === "user" ? "You" : "AstraFlow AI"}
            </p>
            <p className="leading-relaxed">{msg.text}</p>
          </div>
        </motion.div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageDisplay;
