// src/components/withAuth.tsx
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login");
      }
    }, [user, loading]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
