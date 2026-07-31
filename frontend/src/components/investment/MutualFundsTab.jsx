import { mutualFunds } from "../../data/mutualFundsData";
import MutualFundCard from "./MutualFundCard";

function MutualFundsTab() {
  return (

    <div>

      <div className="flex justify-between mb-8">

        <input

          placeholder="Search Mutual Funds..."

          className="bg-[#131A2A] rounded-lg px-4 py-3 w-96"

        />

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {mutualFunds.map((fund)=>(
          <MutualFundCard
            key={fund.id}
            fund={fund}
          />
        ))}

      </div>

    </div>

  );
}

export default MutualFundsTab;