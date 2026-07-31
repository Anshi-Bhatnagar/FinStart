function SipCard({ sip }) {
  return (
    <div className="bg-[#131A2A] rounded-2xl p-6 shadow-lg">

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            {sip.fund}
          </h2>

          <p className="text-gray-400 mt-3">
            ₹{sip.amount.toLocaleString()} / month
          </p>

          <p className="text-gray-400">
            {sip.frequency}
          </p>

          <p className="text-gray-400 mt-3">
            Next Installment
          </p>

          <p>{sip.nextDate}</p>

        </div>

        <div className="flex flex-col justify-between">

          <span className="text-green-400">
            🟢 {sip.status}
          </span>

          <div className="flex gap-2">

            <button className="bg-yellow-600 px-3 py-2 rounded-lg">
              Pause
            </button>

            <button className="bg-violet-600 px-3 py-2 rounded-lg">
              Edit
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SipCard;