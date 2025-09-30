import Selling from "@/components/main/dashboard/selling";
import { branchParams } from "@/mocks/main/branches";

export default async function DashboardPage({
  params,
}: {
  params?: Promise<{ branchId: string }>;
}) {
  const resolvedParams = await params;
  const branchId = resolvedParams?.branchId;

  return (
    <main className="flex items-start justify-center min-h-screen max-w-md w-full mx-auto p-4">
      <Selling />
    </main>
  );
}

export async function generateStaticParams() {
  return branchParams;
}
