"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/language");
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex max-w-md w-full mx-auto items-center justify-center min-h-screen bg-[#E41E3F]">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <Image
            className="rounded-full size-40"
            src="/images/pintel-logo.png"
            alt="Pintel Logo"
            width={60}
            height={60}
            priority
          />
          <div className="flex flex-col items-start">
            <span className="text-white text-4xl font-[cursive] italic">
              Pintel
            </span>
            <p className="mt-2 text-white text-sm">
              Connect business to the world
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
