// src/pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { ProfileProvider } from "@/context/ProfileContext";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  );
};

export default MyApp;
