// src/pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { ProfileProvider } from "@/context/ProfileContext";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ProfileProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProfileProvider>
  );
};

export default MyApp;
