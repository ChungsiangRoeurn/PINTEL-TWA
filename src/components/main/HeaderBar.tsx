"use client";

import { ArrowBigDownDash, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BranchSelector from "@/components/main/branch-selector";

export default function HeaderBar() {
  return (
    <div className="bg-white max-w-md w-full mx-auto px-2 flex items-center justify-between border-b">
      <BranchSelector />
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <ArrowBigDownDash />
        </Button>
        <Button variant="outline">
          <BellDot />
        </Button>
        <Button variant="outline" size="icon">
          <Image
            src="/images/user-avatar.png"
            alt="User"
            width={24}
            height={24}
            className="rounded-full"
          />
        </Button>
      </div>
    </div>
  );
}
