import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function Checking() {
  return (
    <main className="max-w-md w-full mx-auto flex flex-col bg-white gap-2">
      <p className="px-5 font-medium">ទូទាត់ប្រាក់</p>
      <Card className="mx-6 h-4 flex items-center justify-center">
        <div className="flex items-center justify-between w-full px-5">
          <span>ដាក់ប្រាក់</span>
          <ChevronRight className="size-5 text-gray-500" />
        </div>
      </Card>
      <Card className="mx-6 h-4 flex items-center justify-center">
        <div className="flex items-center justify-between w-full px-5">
          <span>ដាក់ប្រាក់</span>
          <ChevronRight className="size-5 text-gray-500" />
        </div>
      </Card>
      <Card className="mx-6 h-4 flex items-center justify-center">
        <div className="flex items-center justify-between w-full px-5">
          <span>ដាក់ប្រាក់</span>
          <ChevronRight className="size-5 text-gray-500" />
        </div>
      </Card>
    </main>
  );
}
