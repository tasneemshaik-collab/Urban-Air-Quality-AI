import {
  Car,
  Factory,
  Hammer,
  Flame,
  Brain,
  AlertTriangle,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

export default function SourceAnalysis({ selected }) {
  if (!selected) {
    return (
      <div className="h-full p-7 flex flex-col justify-center items-center text-center">

        <Brain className="text-green-400 mb-5" size={60} />

        <h2 className="text-3xl font-bold mb-3">
          AI Source Attribution
        </h2>

        <p className="text-slate-400">
          Click anywhere on the map to analyse
          pollution sources and receive AI recommendations.
        </p>

      </div>
    );
  }

  const sources = [
    {
      name: "Traffic",
      value: selected.traffic,
      color: "bg-red-500",
      icon: Car,
    },
    {
      name: "Industry",
      value: selected.industry,
      color: "bg-blue-500",
      icon: Factory,
    },
    {
      name: "Construction",
      value: selected.construction,
      color: "bg-yellow-500",
      icon: Hammer,
    },
    {
      name: "Open Burning",
      value: selected.burning,
      color: "bg-green-500",
      icon: Flame,
    },
  ];

  const dominant = [...sources].sort((a, b) => b.value - a.value)[0];

  return (
    <div className="p-6 h-full flex flex-col">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-6">

        <Brain className="text-green-400" size={34} />

        <div>

          <h2 className="text-2xl font-bold">
            AI Source Attribution
          </h2>

          <p className="text-slate-400 text-sm">
            Real-time pollution analysis
          </p>

        </div>

      </div>

      {/* AQI */}

      <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">

        <div className="flex justify-between">

          <div>

            <p className="text-slate-400">
              Current AQI
            </p>

            <h1 className="text-5xl font-bold text-green-400 mt-2">
              {selected.aqi}
            </h1>

          </div>

          <BadgeCheck
            size={55}
            className="text-green-400"
          />

        </div>

      </div>

      {/* Location */}

      <div className="mt-6 flex items-center gap-3">

        <MapPinned className="text-blue-400" />

        <div>

          <p className="text-slate-400 text-sm">
            Selected Coordinates
          </p>

          <p className="font-semibold">
            {selected.lat}, {selected.lng}
          </p>

        </div>

      </div>

      {/* Sources */}

      <div className="mt-7 space-y-5">

        {sources.map((item) => {

          const Icon = item.icon;

          return (

            <div key={item.name}>

              <div className="flex justify-between items-center mb-2">

                <div className="flex items-center gap-2">

                  <Icon
                    size={18}
                    className="text-white"
                  />

                  <span>
                    {item.name}
                  </span>

                </div>

                <span className="font-bold">
                  {item.value}%
                </span>

              </div>

              <div className="w-full h-3 rounded-full bg-slate-700">

                <div
                  className={`${item.color} h-3 rounded-full transition-all duration-700`}
                  style={{
                    width: `${item.value}%`,
                  }}
                />

              </div>

            </div>

          );

        })}

      </div>

      {/* Dominant Source */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-5 border border-slate-700">

        <h3 className="font-semibold text-green-400">
          Dominant Source
        </h3>

        <p className="text-2xl font-bold mt-3">
          {dominant.name}
        </p>

        <p className="text-slate-400 mt-2">
          Estimated Contribution : {dominant.value}%
        </p>

      </div>

      {/* AI Recommendation */}

      <div className="mt-6 bg-gradient-to-r from-green-900/30 to-blue-900/20 rounded-2xl p-5 border border-green-700">

        <div className="flex items-center gap-2 mb-3">

          <AlertTriangle className="text-yellow-400" />

          <h3 className="font-bold">
            AI Recommendation
          </h3>

        </div>

        <p className="text-slate-300 leading-7">

          {selected.recommendation}

        </p>

      </div>

    </div>
  );
}