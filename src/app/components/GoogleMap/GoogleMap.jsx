"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

import "./GoogleMap.css";

export default function GoogleMap() {
  const mapRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function initMap() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

        if (!apiKey) {
          throw new Error("Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY");
        }

        if (!mapRef.current) return;

        setOptions({
          key: apiKey,
          v: "weekly",
        });

        const location = { lat: 51.528662, lng: -0.027986 };

        const { Map } = await importLibrary("maps");
        await importLibrary("marker");

        const map = new Map(mapRef.current, {
          center: location,
          zoom: 16,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        });

        new google.maps.Marker({
          position: location,
          map,
          title: "HRJ Media",
        });
      } catch (err) {
        console.error("Google Map load error:", err);
        if (!cancelled) {
          setError(err?.message || "Failed to load map");
        }
      }
    }

    initMap();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="google-map-section">
        <div className="container">
          {error ? <p className="google-map-error">{error}</p> : null}
          <div ref={mapRef} className="google-map" />
        </div>
      </section>
    </>
  );
}
