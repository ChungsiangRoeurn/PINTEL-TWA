import MenuClient from "@/components/main/MenuClient";
import { branchParams } from "@/mocks/main/branches";

export default async function HomePage({
  params,
}: {
  params?: Promise<{ branchId: string }>;
}) {
  const resolvedParams = await params;
  const branchId = resolvedParams?.branchId;

  return (
    <main className="max-w-md w-full mx-auto">
      <MenuClient branchId={branchId ?? ""} />
    </main>
  );
}

export async function generateStaticParams() {
  return branchParams;
}
