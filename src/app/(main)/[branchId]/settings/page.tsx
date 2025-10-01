import HeaderBar from "@/components/main/layout/HeaderBar";
import React from "react";

export default async function Settings({}: {
  params?: Promise<{ branchId: string }>;
}) {
  return (
    <main className="flex items-center justify-center h-full max-w-md w-full mx-auto">
      <HeaderBar
        variant="dashboard"
        branchName="សាខា"
        logoUrl="/images/pintel-logo.png"
      />
    </main>
  );
}
