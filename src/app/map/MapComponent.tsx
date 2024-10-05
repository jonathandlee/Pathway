import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
  const [markers, setMarkers] = useState<{ lat: number, lng: number }[]>([]);
  const ithacaCoords: [number, number] = [42.443962, -76.501884]; // Ithaca coordinates
  const [selectedPosition, setSelectedPosition] = useState<{ lat: number, lng: number } | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [comment, setComment] = useState('');

  console.log("test hello");

  const MapEvents = () => {
    useMapEvents({
      contextmenu(e) {
        // Log the position where the user right-clicked
        console.log('Right-clicked at coordinates:', e.latlng.lat, e.latlng.lng);

        // Capture the position where the user right-clicked and display a form
        setSelectedPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
        setIsFormVisible(true);
      }
    });
    return null;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPosition) {
      console.log('' + selectedPosition.lat + ' ' + selectedPosition.lng);
    }
  };

  // Log to the console every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Logging every 5 seconds');
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run once on mount

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

      {/* Marker for user's current location */}
      {/* Map events listener */}
      <MapEvents />

      {/* Marker for user's right-click location */}
      {selectedPosition && isFormVisible && (
        <Popup position={[selectedPosition.lat, selectedPosition.lng]} eventHandlers={{ remove: () => setIsFormVisible(false) }}>
          <div>
            Right-clicked at coordinates: {selectedPosition.lat}, {selectedPosition.lng}
          </div>
        </Popup>
      )}

    </MapContainer>
  );
};

export default MapComponent;
