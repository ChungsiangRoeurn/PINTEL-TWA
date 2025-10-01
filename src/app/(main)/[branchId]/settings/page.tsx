import HeaderBar from "@/components/main/layout/HeaderBar";
import Card from "@/components/main/settings/Card";
import Checking from "@/components/main/settings/Checking";
import React from "react";

export default async function Settings({}: {
  params?: Promise<{ branchId: string }>;
}) {
  return (
    <main className="flex flex-col items-center justify-center h-full mx-auto">
      <HeaderBar
        variant="dashboard"
        branchName="Pintel"
        logoUrl="/images/pintel-logo.jpg"
      />
      <div className="max-w-md w-full">
        <Card />
        <Checking />
      </div>
    </main>
  );
}
