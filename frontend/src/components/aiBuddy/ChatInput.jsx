import { useState } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim() || loading) return;

    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-3 mt-4">
      <input
        type="text"
        placeholder="Ask any finance question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 rounded-xl disabled:opacity-50"
      >
        {loading ? "..." : "➜"}
      </button>
    </div>
  );
};

export default ChatInput;