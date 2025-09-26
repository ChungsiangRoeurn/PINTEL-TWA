import MenuBar from "@/components/main/menu-bar";
import { branchParams } from "@/mocks/main/branches";

export default function BranchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { branchId: string };
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pb-20">{children}</div>
      <MenuBar branchId={params.branchId} />
    </div>
  );
}

export async function generateStaticParams() {
  return branchParams;
}
