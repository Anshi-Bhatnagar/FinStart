import SipCard from "./SipCard";
import { sipData } from "../../data/sipData";

function SipTab() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          My SIPs
        </h2>

        <button className="bg-violet-600 px-5 py-3 rounded-xl hover:bg-violet-700">
          + Start New SIP
        </button>

      </div>

      <div className="space-y-6">

        {sipData.map((sip) => (
          <SipCard
            key={sip.id}
            sip={sip}
          />
        ))}

      </div>

    </div>
  );
}

export default SipTab;