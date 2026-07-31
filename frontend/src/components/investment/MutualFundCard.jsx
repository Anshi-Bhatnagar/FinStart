function MutualFundCard({ fund }) {
  return (
    <div className="bg-[#131A2A] rounded-2xl p-6 hover:shadow-xl transition">

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            {fund.name}
          </h2>

          <p className="text-yellow-400 mt-2">
            ⭐ {fund.rating}
          </p>

        </div>

        <button
          className="bg-violet-600 px-5 py-2 rounded-lg hover:bg-violet-700"
        >
          Invest
        </button>

      </div>

      <div className="grid grid-cols-3 mt-8">

        <div>

          <p className="text-gray-400">
            NAV
          </p>

          <p>
            ₹{fund.nav}
          </p>

        </div>

        <div>

          <p className="text-gray-400">
            3Y Return
          </p>

          <p className="text-green-400">
            +{fund.returns}%
          </p>

        </div>

        <div>

          <p className="text-gray-400">
            Risk
          </p>

          <p>
            {fund.risk}
          </p>

        </div>

      </div>

    </div>
  );
}

export default MutualFundCard;