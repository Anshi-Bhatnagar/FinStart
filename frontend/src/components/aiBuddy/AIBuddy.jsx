import { useState, useEffect, useRef  } from "react";
import { sendMessage } from "../../api/api";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

const quickQuestions = [
  "📈 What is SIP?",
  "💰 What is Mutual Fund?",
  "📊 Explain Inflation",
  "🚀 How do I start investing?"
];

const AIBuddy = () => {
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    // Show user message immediately
    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const data = await sendMessage(text, conversationId);

      // Save conversation id after first message
      if (!conversationId) {
        setConversationId(data.conversation_id);
      }

      // Add AI response
      const aiMessage = {
        sender: "ai",
        text: data.ai_response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center p-6">

      <div className="w-full max-w-4xl bg-[#0F172A] rounded-2xl border border-slate-700 p-6 flex flex-col">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">
            🤖 AI Financial Buddy
          </h1>

          <p className="text-slate-400 mt-2">
            Learn before you invest.
          </p>
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="mb-6">

            <p className="text-slate-300 mb-4">
              <div className="text-center py-10">
  <div className="text-5xl">🤖</div>

  <h2 className="text-2xl font-bold text-white mt-2">
    AI Financial Buddy
  </h2>

  <p className="text-slate-400 mt-2">
    Ask any finance-related question.
  </p>
</div>
            </p>

            <div className="flex flex-wrap gap-3">

              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSend(question)}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl px-4 py-2 text-white"
                >
                  {question}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4">

          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message}
            />
          ))}

          {loading && (
  <div className="flex justify-start mb-4">
    <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl text-slate-400">
      🤖 Thinking...
    </div>
  </div>
)}

        </div>

        {/* Input */}
        <ChatInput
          onSend={handleSend}
          loading={loading}
        />

      </div>

    </div>
  );
};

export default AIBuddy;