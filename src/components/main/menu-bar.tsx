import {
  Columns3Cog,
  House,
  LayoutGrid,
  ScanBarcode,
  Ticket,
} from "lucide-react";
import React from "react";

export default function MenuBar() {
  return (
    <div>
      {/* Menu Bar */}
      <div className="fixed bottom-1 pb-2 left-0 right-0 border-t max-w-md w-full mx-auto p-2 bg-white flex justify-between items-center">
        {/* Home */}
        <div className="flex flex-col gap-1 items-center text-sm text-[#E41E3F]">
          <House size={20} />
          <span>ទំព័រដើម</span>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-1 items-center text-sm text-gray-400">
          <LayoutGrid size={20} />
          <span>ផ្ទាំងព័ត៏មាន</span>
        </div>

        {/* Scan / Center Button */}
        <div className="flex flex-col items-center gap-1 -mb-1 text-sm text-[#E41E3F]">
          <div className="bg-[#E41E3F] p-3 rounded-full text-white">
            <ScanBarcode size={24} />
          </div>
        </div>

        {/* Tickets */}
        <div className="flex flex-col gap-1 items-center text-sm text-gray-400">
          <Ticket size={20} />
          <span>ការលក់</span>
        </div>

        {/* Delivery */}
        <div className="flex flex-col gap-1 items-center text-sm text-gray-400">
          <Columns3Cog size={20} />
          <span>ការកំណត់</span>
        </div>
      </div>
    </div>
  );
}
