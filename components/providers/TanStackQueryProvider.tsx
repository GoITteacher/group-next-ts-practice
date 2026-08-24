"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface TanStackQueryProviderProps {
  children: React.ReactNode;
}

const TanStackQueryProvider = ({ children }: TanStackQueryProviderProps) => {
  const [queryClient, setQueryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackQueryProvider;
