"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Loading from "../commons/Loading";
import Authenticating from "../commons/Authenticating";
import AuthenticateResponseDTO from "@/dtos/responses/auth/auth.authenticate.dto";
import authenticate from "@/services/auth/auth.authenticate";

interface IIsAuthenticatedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

const IsAuthenticated = (props: IIsAuthenticatedProps) => {
  const { children } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const validateToken = async () => {
    try {
      setLoading(true);
      const authenticateResponseDTO: AuthenticateResponseDTO = await authenticate();
    } catch (error) {
      router.push("/auth/sign-in");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  if (loading) {
    return <Authenticating />;
  }

  return <div>{children}</div>;
};

export default IsAuthenticated;
