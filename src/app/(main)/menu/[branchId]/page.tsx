import MenuClient from "@/app/(main)/menu/[branchId]/Menu-Client";

interface SegmentParams {
  branchId: string;
}

export default async function MenuPage({
  params,
}: {
  params: Promise<SegmentParams>;
}) {
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId;

  return (
    <main className="max-w-md w-full mx-auto">
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
