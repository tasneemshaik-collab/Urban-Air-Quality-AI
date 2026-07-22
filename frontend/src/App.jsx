import { useState } from "react";
import AQIChart from "./components/dashboard/AQIChart";
import Navbar from "./components/layout/Navbar";
import AQICards from "./components/dashboard/AQICards";
import AirMap from "./components/map/AirMap";
import SourceAnalysis from "./components/ai/SourceAnalysis";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      <Navbar />

      <main className="max-w-[1700px] mx-auto px-8 py-6">

        {/* KPI Cards */}

        <section className="mb-8">
          <AQICards />
        </section>

        {/* Main Dashboard */}

        <section className="grid grid-cols-12 gap-6">

          {/* Map */}

          <div className="col-span-12 xl:col-span-8">

            <div className="bg-[#0F172A] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-700">

                <div>

                  <h2 className="text-2xl font-bold">

                    🌍 Live Air Quality Map

                  </h2>

                  <p className="text-gray-400 mt-1">

                    Click anywhere to generate AI insights

                  </p>

                </div>

                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">

                  LIVE

                </span>

              </div>

              <AirMap
                selected={selected}
                setSelected={setSelected}
              />

            </div>

          </div>

          {/* AI Panel */}

          <div className="col-span-12 xl:col-span-4">

            <div className="bg-[#0F172A] border border-slate-700 rounded-3xl shadow-2xl h-full">

              <SourceAnalysis
                selected={selected}
              />

            </div>

          </div>

        </section>

        {/* Bottom Row */}

        <section className="grid grid-cols-12 gap-6 mt-8">

          <div className="col-span-12 lg:col-span-8">

            <div className="bg-[#0F172A] rounded-3xl border border-slate-700 h-[330px] flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-3xl font-bold text-green-400">

                  📈 AQI Forecast

                </h2>

                <p className="text-gray-400 mt-3">

                  <AQIChart />

                </p>

              </div>

            </div>

          </div>

          <div className="col-span-12 lg:col-span-4">

            <div className="bg-[#0F172A] rounded-3xl border border-slate-700 h-[330px] flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-3xl font-bold text-orange-400">

                  🚨 Enforcement

                </h2>

                <p className="text-gray-400 mt-3">

                  AI Recommendation Panel

                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}