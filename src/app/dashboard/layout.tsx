import { ReactNode } from "react";
import Sidebar from "./_components/sidebar";
import Topbar from "./_components/top-bar";

interface Props {
  children: ReactNode;
}

const LayouDashboardLayout = ({ children }: Props) => {
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
    </div>
  );
};

export default LayouDashboardLayout;
