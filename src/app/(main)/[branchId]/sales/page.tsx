"use client";

import React, { useState } from "react";
import {
  Calendar,
  Check,
  Search,
  EllipsisVertical,
  ArrowDownUp,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FloatInput } from "@/components/shared/FloatInput";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Sales({
  params,
}: {
  params?: Promise<{ branchId: string }>;
}) {
  const [selected, setSelected] = useState("ខែនេះ");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const invoices = [
    {
      id: "INV-621462",
      date: "16-03-2025",
      time: "05:25 PM",
      status: "Pending",
      amount: "$95.50",
    },
    {
      id: "INV-621461",
      date: "16-03-2025",
      time: "03:10 PM",
      status: "Pending",
      amount: "$142.75",
    },
    {
      id: "INV-621460",
      date: "16-03-2025",
      time: "01:20 PM",
      status: "Paid",
      amount: "$87.25",
    },
    {
      id: "INV-621459",
      date: "16-03-2025",
      time: "10:45 AM",
      status: "Paid",
      amount: "$203.00",
    },
    {
      id: "INV-621458",
      date: "16-03-2025",
      time: "08:30 AM",
      status: "Paid",
      amount: "$156.80",
    },
    {
      id: "INV-621457",
      date: "15-03-2025",
      time: "06:00 PM",
      status: "Paid",
      amount: "$74.90",
    },
    {
      id: "INV-621456",
      date: "15-03-2025",
      time: "04:15 PM",
      status: "Paid",
      amount: "$189.60",
    },
    {
      id: "INV-621455",
      date: "15-03-2025",
      time: "02:20 PM",
      status: "Paid",
      amount: "$112.40",
    },
    {
      id: "INV-621454",
      date: "15-03-2025",
      time: "11:45 AM",
      status: "Paid",
      amount: "$298.75",
    },
    {
      id: "INV-621453",
      date: "15-03-2025",
      time: "09:30 AM",
      status: "Paid",
      amount: "$165.30",
    },
  ];

  const dateOptions = [
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

  const sortOptions = [
    { label: "ថ្មី​ជាង​គេ", value: "newest" },
    { label: "ចាស់​ជាង​គេ", value: "oldest" },
    { label: "ចំនួន​ទឹក​ប្រាក់ (ខ្ពស់​ទៅ​ទាប)", value: "amount-high" },
    { label: "ចំនួន​ទឹក​ប្រាក់ (ទាប​ទៅ​ខ្ពស់)", value: "amount-low" },
    { label: "ស្ថានភាព", value: "status" },
  ];

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.amount.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="max-w-md w-full mx-auto min-h-screen bg-white pb-20">
      <div className="flex items-center gap-3 w-full p-4 bg-white sticky top-0 z-10 border-b">
        <div className="flex-1">
          <FloatInput
            id="search"
            type="text"
            icon={Search}
            label="ស្វែងរក"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Button variant="ghost" className="rounded-full">
          <EllipsisVertical className="size-5" />
        </Button>
      </div>

      {/* Selected Date Display */}
      <div className="px-4 py-3 bg-white border-b">
        <Sheet>
          <div className="flex gap-3 items-center justify-start">
            <Sheet>
              <SheetTrigger asChild>
                <ArrowDownUp className="size-8 bg-slate-100 rounded-md text-gray-500 p-2" />
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="max-w-md w-full mx-auto rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle className="text-base font-medium text-center">
                    តម្រៀប
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-4 space-y-3">
                  {sortOptions.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center justify-between p-3 border-b last:border-none cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setSortBy(option.value)}
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {option.label}
                        </p>
                      </div>
                      {sortBy === option.value && (
                        <Check
                          size={18}
                          className="text-emerald-500 flex-shrink-0"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <div className="flex items-center gap-1 py-[5px] text-sm text-[#E41E3F] transition-colors">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{selected}</span>
                </div>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent
            side="bottom"
            className="max-w-md w-full mx-auto rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle className="text-base font-medium text-center">
                កាលបរិច្ឆេទ
              </SheetTitle>
            </SheetHeader>

            <div className="mt-4 space-y-3">
              {dateOptions.map((opt) => (
                <div
                  key={opt.value}
                  className="flex items-center justify-between p-3 border-b last:border-none cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setSelected(opt.label)}
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {opt.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{opt.date}</p>
                  </div>
                  {selected === opt.label && (
                    <Check
                      size={18}
                      className="text-emerald-500 flex-shrink-0"
                    />
                  )}
                </div>
              ))}

              {/* Custom Date Option */}
              <button className="flex items-center gap-3 text-red-500 text-sm font-medium p-3 w-full hover:bg-red-50 rounded-md transition-colors">
                <Calendar size={18} />
                ពិសេសកាលបរិច្ឆេទ
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Invoice List */}
      <div className="p-4 space-y-3">
        {filteredInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base">
                  {invoice.id}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {invoice.date} - {invoice.time}
                </p>
              </div>
              <div className="text-right ml-4">
                <Badge
                  variant={
                    invoice.status === "Pending" ? "secondary" : "default"
                  }
                  className={`
                    ${
                      invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        : "bg-green-100 text-green-800 hover:bg-green-100"
                    } text-xs font-medium mb-2
                  `}
                >
                  {invoice.status}
                </Badge>
                <p className="text-lg font-bold text-gray-900">
                  {invoice.amount}
                </p>
              </div>
            </div>
          </div>
        ))}

        {filteredInvoices.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No invoices found
          </div>
        )}
      </div>
    </main>
  );
}
