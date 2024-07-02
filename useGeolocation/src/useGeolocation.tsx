import { useState } from "react";

interface CoordsType {
  lat: null | number;
  lng: null | number;
}

export default function useGeolocation(showCounts = false) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<CoordsType>({
    lat: null,
    lng: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [countClick, setCountClick] = useState<null | number>(0);

  function getPosition() {
    if (countClick !== null) {
      setCountClick(countClick + 1);
    }
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err) => {
        console.log(err.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition, showCounts, countClick };
}
