"use client";

import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/providers/TanStackProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
