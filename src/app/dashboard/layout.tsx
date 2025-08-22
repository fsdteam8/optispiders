import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import Topbar from "./_components/top-bar";

interface Props {
  children: ReactNode;
}

const LayouDashboardLayout = async ({ children }: Props) => {
  const session = await auth();
  const isLoggedin = !!session;

  if (!isLoggedin) redirect("/login");
  return (
    <div className="flex min-h-screen flex-col">
      <Sidebar />
      {/* Main Content */}
      <div className="ml-64 flex flex-1 flex-col">
        {/* Top Bar */}
        <Topbar name={"Monir Hossain" as string} />

        <div className="p-6 bg-[#F5F7FA] min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </div>
      <NextTopLoader showSpinner={false} color="#1E2A38" />
    </div>
  );
};

export default LayouDashboardLayout;
