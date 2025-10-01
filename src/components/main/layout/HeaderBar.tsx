"use client";

import {
  ArrowBigDownDash,
  BellDot,
  X,
  User,
  Settings,
  LogOut,
  QrCode,
  LogOutIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BranchSelector from "@/components/main/branch-selector";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
  const [isProfileSheetOpen, setIsProfileSheetOpen] = useState(false);

  return (
    <>
      {/* Header */}
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

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Button className="rounded-full" variant="outline" size="icon">
            <ArrowBigDownDash />
          </Button>
          <Button className="rounded-full" variant="outline" size="icon">
            <BellDot />
          </Button>
          <Button
            className="rounded-full"
            variant="outline"
            size="icon"
            onClick={() => setIsProfileSheetOpen(true)}
          >
            <Image
              src="/images/pintel-logo.jpg"
              alt="User"
              width={24}
              height={24}
              className="rounded-full"
            />
          </Button>
        </div>
      </div>

      <Sheet open={isProfileSheetOpen} onOpenChange={setIsProfileSheetOpen}>
        <SheetContent
          side="bottom"
          className="max-w-md w-full mx-auto rounded-t-2xl p-0 max-h-[90vh] overflow-hidden"
        >
          {/* Accessibility Title (hidden visually but screen readers can read it) */}
          <SheetHeader>
            <SheetTitle className="sr-only">Profile Sheet</SheetTitle>
          </SheetHeader>

          {/* Profile Header */}
          <div className="px-4 flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/pintel-logo.jpg"
                alt="User"
                width={50}
                height={50}
                className="rounded-full border"
              />
              <div>
                <h3 className="font-medium text-gray-900 text-sm">
                  ជា សេងហាក់
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  CHEA SENGHAK
                </p>
              </div>
            </div>

            <div className="gap-3 flex items-center">
              <Button variant="ghost" size="icon">
                <QrCode className="size-8 bg-slate-100 rounded-md p-2" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <LogOutIcon className="size-8 bg-slate-100 rounded-sm p-2" />
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent className="max-w-sm w-80 mx-auto rounded-xl p-0 flex flex-col items-center justify-center overflow-hidden bg-white">
                  <AlertDialogHeader className="py-4 text-center">
                    <AlertDialogTitle className="text-center font-normal">
                      បញ្ជាក់
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm text-gray-600">
                      តើអ្នកប្រាកដថាចង់ចាកចេញពីគណនីនេះមែនទេ?
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter className="w-full flex p-0 gap-0 border-t">
                    <AlertDialogCancel className="flex-1 rounded-none border-r border-gray-200 py-3 text-base font-medium hover:bg-gray-100">
                      បោះបង់
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        console.log("User logged out");
                      }}
                      className="flex-1 rounded-none py-3 text-base font-medium text-red-600 bg-white hover:bg-red-50"
                    >
                      ចាកចេញ
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Options */}
          <div className="p-2">
            <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <User size={20} className="text-gray-600" />
                <span className="text-sm font-medium">អ្នកប្រើប្រាស់</span>
              </div>
              <span className="text-green-500">✔</span>
            </button>

            <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-gray-600" />
                <span className="text-sm font-medium">ប្រើប្តូរគណនី</span>
              </div>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
