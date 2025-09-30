"use client";

import { IconInput } from "@/components/shared/Input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, ArrowLeft, Search, LockKeyhole, User } from "lucide-react";
import { useRouter } from "next/navigation";

interface LoginProps {
  title: string;
  phonePlaceholder: string;
  passwordPlaceholder: string;
  buttonText: string;
}

export default function LoginPage({
  title,
  phonePlaceholder,
  passwordPlaceholder,
  buttonText,
}: LoginProps) {
  const router = useRouter();

  const handleNext = () => router.push("/branches");
  const handleBack = () => router.push("/");

  return (
    <main className="flex flex-col items-center justify-between max-w-sm mx-auto w-full min-h-screen bg-white">
      {/* Back Button */}
      <div className="w-full flex items-center px-4 pt-6">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full px-3 py-2"
        >
          <ArrowLeft className="size-5" />
        </Button>
      </div>

      <div className="w-full flex flex-col items-center px-4">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <LogIn className="size-10 text-black" />
          </div>
          <h1 className="mt-6 text-xl font-medium text-gray-900">{title}</h1>
        </div>

        <div className="flex flex-col gap-6 w-full mt-10">
          <IconInput
            id="password"
            type="password"
            icon={LockKeyhole}
            label={phonePlaceholder}
          />
          <IconInput
            id="username"
            type="text"
            icon={User}
            label={passwordPlaceholder}
          />
        </div>
      </div>

      {/* Buttons pinned to bottom */}
      <div className="w-full flex flex-col gap-3 px-4 pb-6">
        <Button
          variant="default"
          onClick={handleNext}
          className="w-full py-6 rounded-full bg-[#DE2348] cursor-pointer text-white hover:bg-red-700 border-[#E41E3F]"
        >
          {buttonText}
        </Button>
      </div>
    </main>
  );
}
