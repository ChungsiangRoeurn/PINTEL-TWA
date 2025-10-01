import Selling from "@/components/main/dashboard/selling";
import HeaderBar from "@/components/main/layout/HeaderBar";
import { branchParams } from "@/mocks/main/branches";

export default async function DashboardPage() {
  return (
    <main className="flex flex-col items-center max-w-md w-full mx-auto min-h-screen bg-gray-50">
      <HeaderBar
        variant="dashboard"
        branchName="Pintel"
        logoUrl="/images/pintel-logo.jpg"
      />
      <div className="w-full px-4 mt-4">
        <Selling />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return branchParams;
}
