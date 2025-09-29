import { branchParams } from "@/mocks/main/branches";

export default async function DashboardPage({
  params,
}: {
  params?: Promise<{ branchId: string }>;
}) {
  const resolvedParams = await params;
  const branchId = resolvedParams?.branchId;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-xl">Dashboard for {branchId}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return branchParams;
}
