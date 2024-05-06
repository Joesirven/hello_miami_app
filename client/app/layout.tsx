import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import FloatingNavbar from "@/components/floating-navbar";
import { CSPostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<hello_Miami />",
  description: "Miami's engineering community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <FloatingNavbar />
        <body className={inter.className}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
