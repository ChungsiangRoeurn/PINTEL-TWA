"use client";

import { useRouter } from "next/navigation";
import LanguageCard from "@/components/shared/language-card";
import { Languages } from "lucide-react";
import { useEffect } from "react";

export default function LanguagePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if the page is loaded directly (refresh)
    if (typeof window !== "undefined" && window.performance) {
      const navigation = window.performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      if (navigation.type === "reload") {
        router.replace("/");
      }
    }
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center w-full max-w-sm px-4">
      {/* Top Icon + Title */}
      <div className="flex flex-col items-center mt-16">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-4xl">
            <Languages className="size-10" />
          </span>
        </div>
        <h1 className="mt-6 text-xl font-medium text-gray-900">ជ្រើសរើសភាសា</h1>
        <p className="text-md text-gray-500">Choose your language</p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4 w-full max-w-sm mt-10">
        <LanguageCard
          src="/images/flags/kh.svg"
          label="ភាសាខ្មែរ"
          onClick={() => router.push("/auth/kh")}
        />
        <LanguageCard
          src="/images/flags/us.svg"
          label="English"
          onClick={() => router.push("/auth/en")}
        />
      </div>
    </main>
  );
}
