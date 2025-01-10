// app/chat/page.tsx
"use client";

import React, { useState } from "react";
import ChatForm from "../../components/ChatForm";
import MessageDisplay from "../../components/MessageDisplay";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = async (userMessage: string) => {
    // 1. Add user message to chat
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    // 2. Call server API route
    try {
      const response = await fetch("/api/langflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inputValue: userMessage,
          stream: false, // or true if implementing streaming
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Langflow Response:", data);

      // 3. Parse the AI response from data.outputs
      // Adjust depending on how your data is structured
      const flowOutputs = data?.outputs?.[0];
      const firstComponentOutputs = flowOutputs.outputs[0];
      const aiMessage = firstComponentOutputs?.outputs?.message?.message?.text ?? "No response";

      // 4. Add AI response to chat
      setMessages((prev) => [...prev, { sender: "ai", text: aiMessage }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Oops, something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-center mt-4">Langflow Chat</h2>
      <MessageDisplay messages={messages} />
      <ChatForm onSend={handleSend} />
    </div>
  );
}
