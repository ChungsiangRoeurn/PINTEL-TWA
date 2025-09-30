import HeaderBar from "@/components/main/HeaderBar";
import MenuBar from "@/components/main/menu-bar";

export default async function BranchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ branchId: string }>;
}) {
  const { branchId } = await params;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pb-20">
        <HeaderBar />
        {children}
        <MenuBar branchId={branchId} />
      </div>
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
