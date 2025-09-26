import { branchParams } from "@/mocks/main/branches";

export default function DashboardPage({
  params,
}: {
  params: { branchId: string };
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-xl">Dashboard for {params.branchId}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return branchParams;
}
