import React from "react";

export default async function Sales({
  params,
}: {
  params?: Promise<{ branchId: string }>;
}) {
  const resolvedParams = await params;
  const branchId = resolvedParams?.branchId;

  return (
    <main className="flex items-center justify-center h-full max-w-md w-full mx-auto">
      <h1 className="text-xl">
        Sales page for branch {branchId} (under construction)
      </h1>
    </main>
  );
}
