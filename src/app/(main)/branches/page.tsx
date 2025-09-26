// src/app/branches/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { branches } from "@/mocks/main/branches";

export default function BranchesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

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
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full px-3 py-2"
          >
            <ArrowLeft className="size-5" />
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
              <div className="flex-1 text-start">
                <h2 className="text-sm font-medium">{branch.name}</h2>
                <div className="flex items-start mt-1 text-xs text-gray-500">
                  <MapPin className="size-4 text-[#DE2348] mr-1 flex-shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <Clock className="size-4 text-[#DE2348] mr-1" />
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
