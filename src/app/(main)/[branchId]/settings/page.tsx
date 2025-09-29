import React from "react";

export default async function Settings({
  params,
}: {
  params?: Promise<{ branchId: string }>;
}) {
  const resolvedParams = await params;
  const branchId = resolvedParams?.branchId;

  return (
    <main className="flex items-center justify-center h-full max-w-md w-full mx-auto">
      <h1 className="text-xl">
        Settings page for branch {branchId} (under construction)
      </h1>
    </main>
  );
}
