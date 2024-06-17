import React, { useState, useEffect } from "react";
import { getUserLocation, initializeMap } from "../services/MapService";
import { getMechanicsNearby } from "../services/MechanicService";

const Dashboard = () => {
  const [location, setLocation] = useState(null);
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const loc = await getUserLocation();
        setLocation(loc);
        const nearbyMechanics = await getMechanicsNearby(loc);
        setMechanics(nearbyMechanics);
        const map = initializeMap("map", [loc.lng, loc.lat]);

        // Add markers for mechanics
        nearbyMechanics.forEach((mechanic) => {
          new mapboxgl.Marker()
            .setLngLat([mechanic.location.lng, mechanic.location.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${mechanic.name}</h3>`))
            .addTo(map);
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <ul>
        {mechanics.map((mechanic) => (
          <li key={mechanic.id}>
            <a href={`/mechanic/${mechanic.id}`}>{mechanic.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
