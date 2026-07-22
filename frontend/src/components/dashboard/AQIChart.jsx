import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Today", AQI: 82 },
  { day: "Tomorrow", AQI: 96 },
  { day: "48h", AQI: 108 },
  { day: "72h", AQI: 91 },
];

export default function AQIChart() {
  return (
    <div className="h-full p-6">

      <h2 className="text-2xl font-bold text-green-400 mb-6">
        📈 AQI Forecast
      </h2>

      <ResponsiveContainer width="100%" height={230}>

        <LineChart data={data}>

          <CartesianGrid stroke="#334155" />

          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="AQI"
            stroke="#22c55e"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}