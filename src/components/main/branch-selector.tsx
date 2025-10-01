import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { branches } from "@/mocks/main/branches";
import { MapPinIcon, ChevronDown, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function BranchSelector() {
  return (
    <Sheet>
      {/* Trigger for the sheet */}
      <SheetTrigger asChild>
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-gray-600" />
            <span className="flex flex-col justify-center items-start">
              <span className="text-sm">សាខា</span>
              <span className="text-sm font-medium flex items-center gap-1">
                Bonchon IFL
                <ChevronDown className="w-4 h-4 font-bold bg-slate-100 rounded-2xl" />
              </span>
            </span>
          </div>
        </div>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent
        className="max-w-md w-full mx-auto flex items-center justify-center rounded-t-3xl"
        side="bottom"
      >
        <SheetHeader>
          <SheetTitle className="font-normal">ជ្រើសរើសសាខា</SheetTitle>
        </SheetHeader>

        {/* Your branch list */}
        <div className="flex flex-col gap-2">
          <div className="px-4 pb-4 space-y-2">
            {branches.map((branch) => (
              <button
                key={branch.id}
                // onClick={() => handleBranchClick(branch.id)}
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
      </SheetContent>
    </Sheet>
  );
}
