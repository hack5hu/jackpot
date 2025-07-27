'use client';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import Header from "@/components/organisms/Header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
    </QueryClientProvider>
  );
}