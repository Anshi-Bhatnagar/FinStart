function SortDropdown({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="bg-[#131A2A] border border-gray-700 rounded-xl px-4 py-3 outline-none"
    >
      <option value="default">Sort By</option>

      <option value="profitHigh">
        Highest Profit
      </option>

      <option value="profitLow">
        Lowest Profit
      </option>

      <option value="valueHigh">
        Highest Value
      </option>

      <option value="valueLow">
        Lowest Value
      </option>

      <option value="alphabetical">
        A → Z
      </option>
    </select>
  );
}

export default SortDropdown;