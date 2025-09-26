"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/language");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen mx-auto max-w-md w-full bg-[#E41E3F]">
      <div className="flex flex-col items-center">
        <Image
          src="favicon.ico"
          alt="Pintel Logo"
          width={140}
          height={140}
          className="bg-white rounded-full p-4"
          priority
        />
        <p className="mt-4 text-white text-lg font-medium">
          Connect business to the world
        </p>
      </div>
    </main>
  );
}
