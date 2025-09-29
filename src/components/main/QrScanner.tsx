"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner() {
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    const html5QrCode = new Html5Qrcode("qr-reader");

    const config = { fps: 10, qrbox: 250 };

    html5QrCode
      .start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          setScannedResult(decodedText);
          html5QrCode.stop(); // stop scanning after first scan
        },
        (errorMessage) => {
          // optional: handle scan errors
          console.log(errorMessage);
        }
      )
      .catch((err) => console.error("Failed to start QR scanner:", err));

    return () => {
      html5QrCode.stop().catch(() => {});
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        id="qr-reader"
        ref={scannerRef}
        style={{ width: 300, height: 300 }}
      />
      {scannedResult && (
        <p className="mt-4 text-green-600">Scanned: {scannedResult}</p>
      )}
    </div>
  );
}
