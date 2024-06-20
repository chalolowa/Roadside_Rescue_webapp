import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { getUserLocation, initializeMap } from "../services/MapService";
import { getMechanicsNearby } from "../services/MechanicService";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [location, setLocation] = useState(null);
  const [mechanics, setMechanics] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const loc = await getUserLocation();
        setLocation(loc);
        const nearbyMechanics = await getMechanicsNearby(loc);
        setMechanics(nearbyMechanics);
        const initializedMap = initializeMap("map", [loc.lng, loc.lat]);
        setMap(initializedMap);
      } catch (error) {
        console.error(error);
      }
    })();

    // Cleanup map on component unmount
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map && mechanics.length > 0) {
      // Add markers for mechanics
      mechanics.forEach((mechanic) => {
        new mapboxgl.Marker()
          .setLngLat([mechanic.location.lng, mechanic.location.lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${mechanic.name}</h3>`))
          .addTo(map);
      });
    }
  }, [map, mechanics]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div id="map" className="w-dvw h-dvh"></div>
      <ul>
        {mechanics.map((mechanic) => (
          <li key={mechanic.id}>
            <a href={`/mechanic/${mechanic.id}`}>{mechanic.name}</a>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Dashboard;
