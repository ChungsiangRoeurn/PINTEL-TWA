import MenuClient from "@/app/menu/[branchId]/MenuCliennt";

interface SegmentParams {
  branchId: string;
}

// The page must be async to satisfy PageProps
export default async function MenuPage({
  params,
}: {
  params: SegmentParams; // must be exact type, no union with Promise
}) {
  // No need to await; Next.js handles the promise
  const branchId = params.branchId;

  return <MenuClient params={{ branchId }} />;
}

// Static paths for SSG
export async function generateStaticParams(): Promise<SegmentParams[]> {
  return [
    { branchId: "ifl" },
    { branchId: "exchange-square" },
    { branchId: "sorya" },
    { branchId: "tk-avenue" },
  ];
}
