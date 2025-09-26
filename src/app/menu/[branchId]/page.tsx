import MenuClient from "@/app/menu/[branchId]/MenuCliennt";

interface SegmentParams {
  branchId: string;
}

export default async function MenuPage({
  params,
}: {
  params: Promise<SegmentParams>; // must be a Promise
}) {
  // Await the promise
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId;

  return (
    <main className="max-w-sm w-full mx-auto">
      <MenuClient params={{ branchId }} />
    </main>
  );
}

// SSG paths
export async function generateStaticParams(): Promise<SegmentParams[]> {
  return [
    { branchId: "ifl" },
    { branchId: "exchange-square" },
    { branchId: "sorya" },
    { branchId: "tk-avenue" },
  ];
}
