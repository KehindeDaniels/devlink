// src/layouts/MainLayout.tsx
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-border h-screen">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
