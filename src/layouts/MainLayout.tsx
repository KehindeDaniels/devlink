import Header from "@/components/Header";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-border ">
      <div className="p-6">
        <Header />
      </div>
      <main className=" ">{children}</main>
    </div>
  );
};

export default MainLayout;
