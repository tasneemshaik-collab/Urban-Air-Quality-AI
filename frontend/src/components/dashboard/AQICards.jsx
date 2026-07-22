import {
  Wind,
  Thermometer,
  Droplets,
  Activity,
  Brain,
} from "lucide-react";

const cards = [
  {
    title: "Current AQI",
    value: 82,
    icon: Activity,
    color: "text-green-400",
    bg: "from-green-500/20 to-green-700/10",
    status: "Good",
  },
  {
    title: "Temperature",
    value: "31°C",
    icon: Thermometer,
    color: "text-orange-400",
    bg: "from-orange-500/20 to-orange-700/10",
    status: "Normal",
  },
  {
    title: "Humidity",
    value: "64%",
    icon: Droplets,
    color: "text-sky-400",
    bg: "from-sky-500/20 to-sky-700/10",
    status: "Moderate",
  },
  {
    title: "Wind Speed",
    value: "9 km/h",
    icon: Wind,
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-cyan-700/10",
    status: "Low",
  },
  {
    title: "AI Risk",
    value: "Moderate",
    icon: Brain,
    color: "text-yellow-400",
    bg: "from-yellow-500/20 to-yellow-700/10",
    status: "Tomorrow",
  },
];

export default function AQICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-700
              bg-gradient-to-br
              ${card.bg}
              bg-[#0F172A]
              p-6
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-green-500/10
            `}
          >
            {/* Glow */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">
                  {card.title}
                </p>

                <h2
                  className={`mt-4 text-4xl font-bold ${card.color}`}
                >
                  {card.value}
                </h2>

                <span className="inline-block mt-5 rounded-full bg-slate-800 px-3 py-1 text-xs text-gray-300">
                  {card.status}
                </span>
              </div>

              <div
                className={`
                  h-14
                  w-14
                  rounded-2xl
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                `}
              >
                <Icon
                  size={28}
                  className={card.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}