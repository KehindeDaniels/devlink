// src/pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import { ProfileProvider } from "@/context/ProfileContext";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Component {...pageProps} />
      </ProfileProvider>
    </AuthProvider>
  );
};

export default MyApp;
