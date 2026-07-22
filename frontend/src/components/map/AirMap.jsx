import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ClickMarker({ selected, setSelected }) {
  useMapEvents({
    click(e) {
      const aqi = Math.floor(Math.random() * 160) + 40;
      const temp = Math.floor(Math.random() * 8) + 28;
      const humidity = Math.floor(Math.random() * 25) + 55;
      const wind = Math.floor(Math.random() * 12) + 4;

      let status = "Good";
      let recommendation =
        "Air quality is safe for outdoor activities.";

      let traffic = 25;
      let industry = 20;
      let construction = 15;
      let burning = 10;

      if (aqi > 150) {
        status = "Very Poor";
        recommendation =
          "Deploy inspection teams immediately.";

        traffic = 48;
        industry = 30;
        construction = 15;
        burning = 7;
      } else if (aqi > 100) {
        status = "Poor";
        recommendation =
          "Limit outdoor exposure and monitor emissions.";

        traffic = 55;
        industry = 18;
        construction = 20;
        burning = 7;
      } else {
        traffic = 35;
        industry = 22;
        construction = 28;
        burning = 15;
      }

      setSelected({
        lat: e.latlng.lat.toFixed(4),
        lng: e.latlng.lng.toFixed(4),
        position: e.latlng,

        aqi,
        temp,
        humidity,
        wind,

        traffic,
        industry,
        construction,
        burning,

        status,
        recommendation,
      });
    },
  });

  return selected ? (
    <Marker position={selected.position}>
      <Popup>
        <div className="w-64 space-y-3">

          <h3 className="font-bold text-lg">
            📍 Selected Location
          </h3>

          <div className="text-sm">
            <b>Latitude:</b> {selected.lat}
          </div>

          <div className="text-sm">
            <b>Longitude:</b> {selected.lng}
          </div>

          <hr />

          <div className="flex justify-between">
            <span>AQI</span>
            <b>{selected.aqi}</b>
          </div>

          <div className="flex justify-between">
            <span>Temperature</span>
            <b>{selected.temp}°C</b>
          </div>

          <div className="flex justify-between">
            <span>Humidity</span>
            <b>{selected.humidity}%</b>
          </div>

          <div className="flex justify-between">
            <span>Wind</span>
            <b>{selected.wind} km/h</b>
          </div>

          <hr />

          <div className="font-semibold">
            Status : {selected.status}
          </div>

          <div className="text-green-700 font-bold">
            🤖 AI Recommendation
          </div>

          <p className="text-sm">
            {selected.recommendation}
          </p>

        </div>
      </Popup>
    </Marker>
  ) : null;
}

export default function AirMap({
  selected,
  setSelected,
}) {
  return (
    <MapContainer
      center={[17.385, 78.4867]}
      zoom={11}
      scrollWheelZoom
      style={{
        height: "650px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickMarker
        selected={selected}
        setSelected={setSelected}
      />
    </MapContainer>
  );
}