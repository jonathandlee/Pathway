import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom Icon for Accessibility (You can customize or add more icons as per your requirements)
const fullyAccessibleIcon = new L.Icon({
  iconUrl: 'https://example.com/fully-accessible-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const partiallyAccessibleIcon = new L.Icon({
  iconUrl: 'https://example.com/partially-accessible-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const notAccessibleIcon = new L.Icon({
  iconUrl: 'https://example.com/not-accessible-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent: React.FC = () => {
  const ithacaCoords = [42.443962, -76.501884]; // Ithaca coordinates

  return (
    <MapContainer center={ithacaCoords} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Markers for different levels of accessibility */}
      <Marker position={ithacaCoords} icon={fullyAccessibleIcon}>
        <Popup>
          Fully wheelchair accessible location
        </Popup>
      </Marker>

      {/* You can add more markers here for other accessibility levels */}
      <Marker position={[42.453962, -76.501884]} icon={partiallyAccessibleIcon}>
        <Popup>
          Partially accessible location
        </Popup>
      </Marker>

      <Marker position={[42.463962, -76.501884]} icon={notAccessibleIcon}>
        <Popup>
          Not accessible location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
