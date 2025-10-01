"use client";

import { ArrowBigDownDash, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BranchSelector from "@/components/main/branch-selector";

interface HeaderBarProps {
  variant?: "home" | "dashboard";
  branchName?: string;
  logoUrl?: string;
}

export default function HeaderBar({
  variant = "home",
  branchName = "Pintel",
  logoUrl = "favicon.ico",
}: HeaderBarProps) {
  return (
    <div className="bg-white max-w-md w-full mx-auto p-4 flex items-center justify-between border-b">
      <div className="flex items-center">
        {variant === "home" ? (
          <BranchSelector />
        ) : (
          <div className="flex items-center">
            <Image
              src={logoUrl}
              alt="Logo"
              width={32}
              height={32}
              className="mr-2 rounded-full"
            />
            <span className="text-sm font-medium">{branchName}</span>
          </div>
        )}
      </div>

      {/* Right Section - Same for all variants */}
      <div className="flex items-center gap-3">
        <Button className="rounded-full" variant="outline" size="icon">
          <ArrowBigDownDash />
        </Button>
        <Button className="rounded-full" variant="outline">
          <BellDot />
        </Button>
        <Button className="rounded-full" variant="outline" size="icon">
          <Image
            src="/images/pintel-logo.jpg"
            alt="User"
            width={24}
            height={24}
            className={"rounded-full"}
          />
        </Button>
      </div>
    </div>
  );
}
