// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Menu, MessageSquare, Plus, Send, Settings, User } from 'lucide-react';
// import { loadingPhrases } from '../../components/loadingPhrases';

// interface Message {
//   id: number;
//   content: string;
//   sender: "user" | "ai";
// }

// function App() {
//   const [messages, setMessages] = useState<Message[]>([
//     { id: 1, content: "Hello! How can I help you today?", sender: "ai" },
//   ]);
//   const [input, setInput] = useState('');
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loadingPhrase, setLoadingPhrase] = useState("");

//   // Loading phrases effect
//   useEffect(() => {
//     let phraseTimer: NodeJS.Timeout | null = null;

//     if (isLoading) {
//       setLoadingPhrase(loadingPhrases[0]);
//       phraseTimer = setInterval(() => {
//         const randomIndex = Math.floor(Math.random() * loadingPhrases.length);
//         setLoadingPhrase(loadingPhrases[randomIndex]);
//       }, 2000);
//     } else {
//       setLoadingPhrase("");
//     }

//     return () => {
//       if (phraseTimer) clearInterval(phraseTimer);
//     };
//   }, [isLoading]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = input;
//     setInput('');
    
//     setMessages(prev => [...prev, { id: Date.now(), content: userMessage, sender: "user" }]);
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/langflow", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           inputValue: userMessage,
//           stream: false,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status} ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Langflow Response:", data);

//       const flowOutputs = data?.outputs?.[0];
//       const firstComponentOutputs = flowOutputs.outputs[0];
//       const aiMessage = firstComponentOutputs?.outputs?.message?.message?.text ?? "No response";

//       setMessages(prev => [...prev, { id: Date.now(), content: aiMessage, sender: "ai" }]);
//     } catch (error) {
//       console.error(error);
//       setMessages(prev => [
//         ...prev,
//         { 
//           id: Date.now(), 
//           content: "Oops, something went wrong. Please try again.", 
//           sender: "ai" 
//         }
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex max-h-screen bg-[#0F172A] text-gray-100">
    
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col ">
//         {/* Header */}
//         {/* <header className="h-12 border-b border-[#334155] flex items-center px-4 bg-[#1E293B]">
//           <button 
//             onClick={() => setSidebarOpen(!isSidebarOpen)}
//             className="p-2 hover:bg-[#334155] rounded-lg text-indigo-300"
//           >
//             <Menu size={20} />
//           </button>
//           <h2 className="text-xl font-bold text-center flex-1 text-indigo-100">AstraFlow AI Chat</h2>
//         </header> */}

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
//           {messages.map(message => (
//             <div
//               key={message.id}
//               className={`flex items-start gap-4 ${
//                 message.sender === "user" 
//                   ? 'bg-[#1E293B] shadow-lg' 
//                   : 'bg-[#0F172A] shadow-lg'
//               } p-6 rounded-lg border border-[#334155]`}
//             >
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 message.sender === "user" 
//                   ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
//                   : 'bg-gradient-to-br from-blue-500 to-cyan-600'
//               }`}>
//                 {message.sender === "user" ? <User size={16} /> : <MessageSquare size={16} />}
//               </div>
//               <div className="flex-1">
//                 <p className="text-gray-100 leading-relaxed">
//                   {message.content}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {isLoading && (
//             <div className="text-center text-sm text-indigo-300 italic animate-pulse">
//               {loadingPhrase}
//             </div>
//           )}
//         </div>

//         {/* Input Area */}
//         <div className="border-t border-[#334155] p-4 bg-[#1E293B]">
//           <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Send a message..."
//               disabled={isLoading}
//               className="w-full p-4 pr-12 rounded-lg bg-[#0F172A] border border-[#334155] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50 text-gray-100 placeholder-gray-500"
//             />
//             <button
//               type="submit"
//               className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-indigo-300 hover:text-indigo-100 disabled:opacity-50 disabled:hover:text-indigo-300"
//               disabled={!input.trim() || isLoading}
//             >
//               <Send size={20} />
//             </button>
//           </form>
//           <p className="text-xs text-center text-indigo-300/60 mt-2">
//             AstraFlow AI can make mistakes. Consider checking important information.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// app/page.tsx
"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { Menu, MessageSquare, Plus, Send, Settings, User } from "lucide-react";
import { loadingPhrases } from "@/components/loadingPhrases"; 
// Make sure this points to your actual loadingPhrases location

interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hello! How can I help you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");

  // Randomly cycle loading phrases when isLoading = true
  useEffect(() => {
    let phraseTimer: NodeJS.Timeout | null = null;

    if (isLoading) {
      // Set the first phrase immediately
      setLoadingPhrase(loadingPhrases[0]);

      // Then cycle them every 2 seconds
      phraseTimer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * loadingPhrases.length);
        setLoadingPhrase(loadingPhrases[randomIndex]);
      }, 4500);
    } else {
      setLoadingPhrase("");
    }

    return () => {
      if (phraseTimer) clearInterval(phraseTimer);
    };
  }, [isLoading]);

  // Handle sending of user input
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), content: userMessage, sender: "user" },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/langflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inputValue: userMessage,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Langflow Response:", data);

      const flowOutputs = data?.outputs?.[0];
      const firstComponentOutputs = flowOutputs?.outputs?.[0];
      const aiMessage =
        firstComponentOutputs?.outputs?.message?.message?.text ??
        "No response";

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), content: aiMessage, sender: "ai" },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: "Oops, something went wrong. Please try again.",
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const preprocessMessage = (message: string) => {
    // Remove <data_exploration> and </data_exploration> tags
  let formattedMessage = message.replace(/<\/?data_exploration>/g, '');

  // Remove <JSON> and </JSON> tags
  formattedMessage = formattedMessage.replace(/<\/?JSON>/g, '');

  // Format JSON content
  try {
    const jsonStart = formattedMessage.indexOf('{');
    if (jsonStart !== -1) {
      const jsonString = formattedMessage.substring(jsonStart);
      const jsonObject = JSON.parse(jsonString);
      formattedMessage = formattedMessage.substring(0, jsonStart) + JSON.stringify(jsonObject, null, 2);
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  return formattedMessage.trim();
  };
  

  return (
    <div className="flex h-screen w-screen bg-[#343541] text-gray-100">
      
  

      {/*
        ==========================================
        MAIN CHAT AREA
        ==========================================
      */}
      <div className="flex flex-1 flex-col">
        {/*
          ==========================================
          TOP BAR (Mimicking ChatGPT's top bar)
          ==========================================
        */}
        <header className="flex items-center justify-between h-14 px-4 bg-[#2D2D2D] border-b border-zinc-800 shadow-md">
          <div className="flex items-center gap-3">
            {/* Mobile button to open/close sidebar */}
            
            <h1 className="text-3xl font-bold tracking-wide">SocialSight</h1>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
           
          </div>
        </header>

       
        <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 w-2/3 mx-auto scroll-smooth scrollbar-track-transparent scrollbar-thumb-gray-600 scrollbar-corner-background scrollbar-thin">
          {messages.map((msg) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`w-full max-w-2xl p-4 rounded-md ${
                    isUser
                      ? "bg-[#40414F] text-gray-100"
                      : "bg-[#444654] text-gray-100"
                  } shadow-md`}
                >
                  {/* Sender Avatar + Name */}
                  <div className="flex items-center gap-2 mb-2">
                    {/* <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        isUser ? "bg-indigo-600" : "bg-green-600"
                      }`}
                    >
                      {isUser ? <User size={16} /> : <MessageSquare size={16} />}
                    </div> */}
                    <p className="text-sm font-semibold">
                      {isUser ? "User" : "SocialSight"}
                    </p>
                  </div>
                  {/* Message Content */}
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {preprocessMessage(msg.content)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-center mt-2">
              <p className="text-sm text-gray-300 italic animate-pulse">
                {loadingPhrase}
              </p>
            </div>
          )}

         
        </main>

        {/*
          ==========================================
          BOTTOM INPUT BAR
          ==========================================
        */}
        <footer className="bg-[#40414F] border-t border-black/50 p-4">
          <form
            onSubmit={handleSubmit}
            className="relative max-w-3xl mx-auto flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a message..."
              disabled={isLoading}
              className="flex-1 rounded-md bg-[#343541] text-gray-100 placeholder-gray-500 border-none focus:outline-none focus:ring-1 focus:ring-indigo-500 py-2 px-3 pr-10 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 text-gray-300 hover:text-gray-100 disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}
