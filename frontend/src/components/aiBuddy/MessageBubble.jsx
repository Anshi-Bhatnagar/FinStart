const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-md ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-sm"
            : "bg-slate-800 border border-slate-700 text-slate-300 rounded-bl-sm"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default MessageBubble;