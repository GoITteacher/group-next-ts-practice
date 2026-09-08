"use client";
import TanStackQueryProvider from "@/components/providers/TanStackQueryProvider";
import "./globals.css";
import Header from "@/components/Header/Header";
import AuthProvider from "@/components/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackQueryProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
