"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/language"); // redirect to language page
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen w-full bg-[#E41E3F]">
      <div className="flex flex-col items-center">
        <Image
          src="/images/logo-white.png"
          alt="Pintel Logo"
          width={140}
          height={140}
          priority
        />
        <p className="mt-4 text-white text-lg font-medium">
          Connect business to the world
        </p>
      </div>
    </main>
  );
}
