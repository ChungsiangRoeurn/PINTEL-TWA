"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  DollarSign,
  Users,
  Hourglass,
  ShoppingCart,
  XCircle,
  LogOut,
  OctagonPause,
} from "lucide-react";

export default function TicketCard() {
  return (
    <main className="max-w-md w-full mx-auto flex items-start justify-center bg-white">
      <Card className="rounded-2xl shadow-none border-none overflow-hidden w-full">
        <CardContent className="grid grid-cols-2 gap-2">
          {/* Time */}
          <div className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <Clock className="w-6 h-6 text-indigo-500 mt-1" />
            <div>
              <p className="font-semibold text-lg text-gray-800">2:00 PM</p>
              <p className="text-sm text-gray-500">តារាងចេញ</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <DollarSign className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <p className="font-semibold text-lg text-gray-800">$15.30</p>
              <p className="text-sm text-gray-500">ការបង់កក់ត្រៀម</p>
            </div>
          </div>

          {/* Seats */}
          <div className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <Users className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <p className="font-semibold text-lg text-gray-800">60</p>
              <p className="text-sm text-gray-500">អ្នកដំណើរ</p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-start gap-3 border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <Hourglass className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <p className="font-semibold text-lg text-gray-800">8h 30m</p>
              <p className="text-sm text-gray-500">រយៈពេល</p>
            </div>
          </div>
        </CardContent>

        {/* Buttons */}
        <div className="flex w-full gap-2 px-6">
          <Button className="flex-1 flex items-center justify-center gap-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 shadow-md">
            <OctagonPause className="w-5 h-5" />
            បន្តការលក់
          </Button>
          <Button className="flex-1 flex items-center justify-center gap-2 rounded-md border border-gray-50 text-gray-700 bg-gray-100 hover:bg-gray-50 shadow-sm">
            <LogOut className="w-5 h-5" />
            បញ្ឈប់ការលក់
          </Button>
        </div>
      </Card>
    </main>
  );
}
