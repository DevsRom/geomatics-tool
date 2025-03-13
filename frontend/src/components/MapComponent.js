// frontend/src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A sample location.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;