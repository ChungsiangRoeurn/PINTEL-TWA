// src/app/branches/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function BranchesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  const branches = [
    {
      id: "ifl",
      name: "Bonchon IFL",
      address: "120C1, Russian Federation Blvd (110), Phnom Penh 12156",
      time: "Mon–Sun • 10AM–9PM",
      image: "/images/bonchon.jpg",
    },
    {
      id: "exchange-square",
      name: "Bonchon Exchange Square Mall",
      address: "S3, 01 Preah Ang Non (St. 102), Phnom Penh",
      time: "Mon–Sun • 9AM–9PM",
      image: "/images/bonchon.jpg",
    },
    {
      id: "sorya",
      name: "Bonchon Sorya",
      address: "7, House, 8 Preah Trasak Paem St. (63), 12208",
      time: "Mon–Sun • 9AM–9PM",
      image: "/images/bonchon.jpg",
    },
    {
      id: "tk-avenue",
      name: "Bonchon TK Avenue",
      address: "#TK St516, Beung Kok1 Phnom Penh, 12151",
      time: "Mon–Sun • 9AM–10PM",
      image: "/images/bonchon.jpg",
    },
  ];

  const handleBranchClick = (branchId: string) => {
    router.push(`/menu/${branchId}`);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="flex gap-2 items-center px-4 py-3 border-b">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="p-2 rounded-2xl"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="flex-1 text-start text-lg font-normal text-gray-900">
            ជ្រើសរើសសាខា
          </h1>
        </div>

        {/* Branch list */}
        <div className="px-4 py-4 space-y-3">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleBranchClick(branch.id)}
              className="flex gap-3 rounded-xl border border-gray-200 bg-white shadow-sm p-3 w-full hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold">{branch.name}</h2>
                <div className="flex items-start mt-1 text-xs text-gray-500">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{branch.time}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
