function LearningTabs({ activeTab, setActiveTab }) {
  return (
    <div className="mb-8">

      <div className="inline-flex bg-slate-900 border border-slate-800 rounded-2xl p-1">

        <button
          onClick={() => setActiveTab("progress")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "progress"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          My Progress
        </button>

        <button
          onClick={() => setActiveTab("courses")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "courses"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          All Courses
        </button>

      </div>

    </div>
  );
}

export default LearningTabs;