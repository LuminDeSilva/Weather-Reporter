import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapLocation({ lat, lon, mapRef }) {
  return (
    <div className="map-container">
      <MapContainer
        center={[lat, lon]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lon]}>
          <Popup>You're here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
