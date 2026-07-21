import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="relative mb-8">

      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        placeholder="Search courses..."
        className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-14 pr-5 text-white placeholder-slate-500 outline-none focus:border-purple-500 transition"
      />

    </div>
  );
}

export default SearchBar;