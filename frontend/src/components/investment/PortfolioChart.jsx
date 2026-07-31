import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

import { chartData } from "../../data/chartData";

function PortfolioChart() {

  const [range, setRange] = useState("1M");

  const ranges = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

  return (

    <div className="bg-[#131A2A] rounded-3xl p-8 mt-10">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400">
            Portfolio Performance
          </p>

          <h2 className="text-3xl font-bold mt-2">
            +₹25,430
          </h2>

          <p className="text-green-400 mt-2">
            +25.43% Overall Return
          </p>

        </div>

        <div className="flex gap-2">

          {ranges.map((item)=>(
            <button
              key={item}
              onClick={()=>setRange(item)}
              className={`px-4 py-2 rounded-xl transition ${
                range===item
                ? "bg-violet-600"
                : "bg-[#1E293B]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      <div className="mt-8">

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <AreaChart data={chartData}>

            <defs>

              <linearGradient
                id="colorValue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.5}
                />

                <stop
                  offset="95%"
                  stopColor="#8B5CF6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#2D3748"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="date"
              stroke="#9CA3AF"
            />

            <YAxis
              stroke="#9CA3AF"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorValue)"
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={false}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default PortfolioChart;