// app/menu/[branchId]/page.tsx

import MenuClient from "@/app/menu/[branchId]/MenuCliennt";

// SegmentParams for this dynamic route
interface SegmentParams {
  branchId: string;
}

// Page component must match PageProps
export default async function MenuPage({
  params,
}: {
  params: Promise<SegmentParams>; // must be a Promise
}) {
  // Await the promise
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId;

  return <MenuClient params={{ branchId }} />;
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
