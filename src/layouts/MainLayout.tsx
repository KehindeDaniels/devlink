// src/layouts/MainLayout.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
