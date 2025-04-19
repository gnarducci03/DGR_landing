"use client";

import { useState } from "react";
import { Robot } from "@phosphor-icons/react";

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <Robot size={48} weight="bold" />
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-11/12 max-w-[40rem] h-[calc(100vh-4rem)] max-h-[48rem] bg-white shadow-lg rounded-lg overflow-hidden md:w-[40rem] md:h-[48rem]">
          <iframe
            src={process.env.NEXT_PUBLIC_CHATBOT_API_URL}
            title="Chatbot"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </div>
  );
}
