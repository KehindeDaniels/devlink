// src/layouts/MainLayout.tsx
import React, { ReactNode } from "react";
import Header from "@/components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-border h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
