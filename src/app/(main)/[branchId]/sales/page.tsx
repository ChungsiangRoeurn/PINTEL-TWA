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
      <div className="max-w-md w-full mx-auto border border-red-500 p-4">
        Sales Page for branch: {branchId}
      </div>
    </main>
  );
}
