import Header from "@/components/Header";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-border p-4">
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
