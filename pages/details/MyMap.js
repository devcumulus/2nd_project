import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MyMap = () => {
  const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPosition({ lat: coords.latitude, lng: coords.longitude });
        },
        error => {
          console.error(error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const containerStyle = {
    width: "100%",
    position: "relative",
    marginTop: "65px",
    marginBottom: "100px",
  };

  const mapStyle = {
    width: "100%",
    height: "400px",
    position: "relative",
    border: "1px solid #000000",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <Map
        center={position}
        level={3}
        style={mapStyle}
        apiKey="0a7b875855336bf31181760c0e9ea9b1"
      >
        <MapMarker position={position} />
      </Map>
    </div>
  );
};

export default MyMap;
