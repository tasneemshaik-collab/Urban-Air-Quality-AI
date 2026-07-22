import {
  Search,
  Bell,
  UserCircle,
  MapPin,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-black text-2xl font-bold shadow-lg">
            🌍
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              AirMind AI
            </h1>

            <p className="text-sm text-gray-400">
              Urban Air Quality Intelligence
            </p>

          </div>

        </div>

        {/* Center */}

        <div className="hidden lg:flex items-center gap-4">

          <div className="flex items-center bg-slate-800 rounded-lg px-4 py-2 border border-slate-700">

            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search city..."
              className="bg-transparent outline-none ml-3 w-72 text-white placeholder:text-gray-500"
            />

          </div>

          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">

            <MapPin size={18} className="text-green-400" />

            <select className="bg-transparent outline-none text-white cursor-pointer">

              <option className="text-black">
                Hyderabad
              </option>

              <option className="text-black">
                Delhi
              </option>

              <option className="text-black">
                Bengaluru
              </option>

              <option className="text-black">
                Chennai
              </option>

              <option className="text-black">
                Mumbai
              </option>

            </select>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <button className="relative p-2 rounded-lg hover:bg-slate-800 transition">

            <Bell className="text-gray-300" size={22} />

            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          <div className="flex items-center gap-3 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">

            <UserCircle
              size={36}
              className="text-green-400"
            />

            <div>

              <p className="font-semibold">
                City Admin
              </p>

              <p className="text-xs text-gray-400">
                Smart City Control
              </p>

            </div>

          </div>

        </div>

      </div>
    </nav>
  );
}