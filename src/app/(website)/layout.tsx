import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const WebsiteLayout = ({ children }: Props) => {
  return (
    <div>
      <header className="sticky top-0 z-50 ">
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
