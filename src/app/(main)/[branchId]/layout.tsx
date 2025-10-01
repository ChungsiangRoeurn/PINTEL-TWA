import MenuBar from "@/components/main/layout/MenuBar";

export default async function BranchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ branchId: string }>;
}) {
  const { branchId } = await params;

  return (
    <div className="min-h-screen">
      {/* <HeaderBar /> */}
      <div className="bg-white min-h-screen">{children}</div>
      <MenuBar branchId={branchId} />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { branchId: "ifl" },
    { branchId: "exchange-square" },
    { branchId: "sorya" },
    { branchId: "tk-avenue" },
  ];
}
