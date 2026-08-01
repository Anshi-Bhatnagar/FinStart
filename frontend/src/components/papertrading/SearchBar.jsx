import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-96">

      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search by stock symbol or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-[#131A2A] border border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-violet-500"
      />

    </div>
  );
}

export default SearchBar;