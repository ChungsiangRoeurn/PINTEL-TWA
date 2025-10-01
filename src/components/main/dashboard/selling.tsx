"use client";

import React, { useState } from "react";
import { Calendar, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Selling() {
  const [selected, setSelected] = useState("ថ្ងៃនេះ");

  const options = [
    { label: "ថ្ងៃនេះ", value: "today", date: "05/10/2024" },
    { label: "សប្ដាហ៍នេះ", value: "week", date: "01/10/2024 - 05/10/2024" },
    { label: "ខែនេះ", value: "month", date: "01/10/2024 - 30/09/2024" },
    {
      label: "3 ខែចុងក្រោយ",
      value: "3months",
      date: "01/07/2024 - 30/09/2024",
    },
    {
      label: "6 ខែចុងក្រោយ",
      value: "6months",
      date: "01/04/2024 - 30/09/2024",
    },
  ];

  return (
    <main className="w-full max-w-md mx-auto">
      <div className="border rounded-lg p-4 bg-white shadow-sm relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-700">ការលក់</h2>

          {/* Date Picker Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center gap-1 border rounded-md px-2 py-1 text-xs text-gray-600 hover:bg-gray-50">
                {selected}
                <Calendar size={14} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="bottom"
              className="max-w-md w-full mx-auto rounded-t-2xl p-4"
            >
              <SheetHeader>
                <SheetTitle className="text-base font-medium">
                  កាលបរិច្ឆេទ
                </SheetTitle>
              </SheetHeader>

              <div className="mt-4 space-y-3">
                {options.map((opt) => (
                  <div
                    key={opt.value}
                    className="flex items-center justify-between p-2 border-b last:border-none cursor-pointer hover:bg-gray-50 rounded-md"
                    onClick={() => setSelected(opt.label)}
                  >
                    <div>
                      <p className="text-sm">{opt.label}</p>
                      <p className="text-xs text-gray-500">{opt.date}</p>
                    </div>
                    {selected === opt.label && (
                      <Check size={16} className="text-emerald-500" />
                    )}
                  </div>
                ))}

                {/* Extra Option */}
                <button className="flex items-center gap-2 text-red-500 text-sm mt-4">
                  <Calendar size={16} />
                  ពិសេសកាលបរិច្ឆេទ
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Value */}
        <p className="text-2xl font-medium text-emerald-600">60,998,900 ៛</p>

        {/* Growth Info */}
        <p className="text-xs font-normal text-gray-500 mt-4">
          <span className="text-emerald-600 font-medium">+15% </span>
          (6,099,900) ពីខែមុន
        </p>

        {/* Watermark Icon */}
        <div className="absolute right-0 bottom-0 text-gray-100 text-6xl font-bold select-none pointer-events-none">
          $
        </div>
      </div>
    </main>
  );
}
