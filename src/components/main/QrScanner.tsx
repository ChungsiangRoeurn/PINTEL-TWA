"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner() {
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    const html5QrCode = new Html5Qrcode("qr-reader");

    // set qrbox size relative to viewport
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode
      .start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          setScannedResult(decodedText);
          html5QrCode.stop(); // stop scanning after first scan
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      )
      .catch((err) => console.error("Failed to start QR scanner:", err));

    return () => {
      html5QrCode.stop().catch(() => {});
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center">
      {/* Fullscreen QR reader */}
      <div id="qr-reader" ref={scannerRef} className="w-full h-full" />

      {/* Overlay border */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border-4 border-white rounded-lg w-64 h-64" />
      </div>

      {/* Result display */}
      {scannedResult && (
        <p className="absolute bottom-10 text-green-400 font-medium text-lg">
          ✅ {scannedResult}
        </p>
      )}
    </div>
  );
}
