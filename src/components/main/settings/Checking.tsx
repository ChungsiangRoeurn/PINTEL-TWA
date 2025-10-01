"use client";

import { Card } from "@/components/ui/card";
import { Check, ChevronRight, Search, X } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FloatInput } from "@/components/shared/FloatInput";

export default function Checking() {
  const [activeSheet, setActiveSheet] = useState<string | null>(null);

  const openSheet = (sheetName: string) => {
    setActiveSheet(sheetName);
  };

  const closeSheet = () => {
    setActiveSheet(null);
  };

  return (
    <>
      <main className="max-w-md w-full mx-auto flex flex-col bg-white gap-2">
        <p className="px-5 font-medium">ទូទាត់ប្រាក់</p>

        {/* Deposit Card */}
        <Card
          className="mx-6 h-14 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => openSheet("deposit")}
        >
          <div className="flex items-center justify-between w-full px-5">
            <span>ដាក់ប្រាក់</span>
            <ChevronRight className="size-5 text-gray-500" />
          </div>
        </Card>

        {/* Withdrawal Card */}
        <Card
          className="mx-6 h-14 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => openSheet("withdrawal")}
        >
          <div className="flex items-center justify-between w-full px-5">
            <span>ដកប្រាក់</span>
            <ChevronRight className="size-5 text-gray-500" />
          </div>
        </Card>

        {/* Operations Card */}
        <Card
          className="mx-6 h-14 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => openSheet("operations")}
        >
          <div className="flex items-center justify-between w-full px-5">
            <span>ប្រតិបត្តិការ</span>
            <ChevronRight className="size-5 text-gray-500" />
          </div>
        </Card>
      </main>

      {/* Function to render sheet content */}
      {["deposit", "withdrawal", "operations"].map((sheet) => (
        <Sheet
          key={sheet}
          open={activeSheet === sheet}
          onOpenChange={(open) => !open && closeSheet()}
        >
          <SheetContent
            side="right"
            className="w-full p-0 mx-auto flex flex-col justify-start items-center"
          >
            <SheetHeader className="border-b w-full">
              <div className="flex items-center justify-between w-full">
                <Button
                  variant="ghost"
                  onClick={closeSheet}
                  className="flex items-center justify-center"
                >
                  <X size={20} />
                </Button>
                <SheetTitle className="text-base font-medium">
                  {sheet === "deposit" && "ដាក់ប្រាក់"}
                  {sheet === "withdrawal" && "ដកប្រាក់"}
                  {sheet === "operations" && "ប្រតិបត្តិការ"}
                </SheetTitle>
                <Button
                  variant="ghost"
                  onClick={closeSheet}
                  className="flex items-center justify-center"
                >
                  <Check size={20} />
                </Button>
              </div>
            </SheetHeader>

            <div className="flex flex-col w-full gap-3 px-6">
              <FloatInput id="text" label="ចំនួន" />
              <FloatInput
                className="h-20"
                id="text"
                label="កំណត់សម្គាល់"
                fixedLabel
              />
            </div>
            <div className="w-full flex flex-col gap-3 px-6 pb-6">
              <Button
                variant="default"
                className="w-full py-6 rounded-full bg-[#DE2348] cursor-pointer text-white hover:bg-red-700 border-[#E41E3F]"
              >
                រួចរាល់
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
}
