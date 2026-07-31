import { useState } from "react";

function FilterChips() {
  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            active === filter
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white"
          }`}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}

export default FilterChips;