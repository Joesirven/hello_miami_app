import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { CSPostHogProvider } from "./providers";
import posthog from "posthog-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<hello_Miami />",
  description: "Miami's engineering community",
};

import dynamic from "next/dynamic";

const FloatingNavbar = dynamic(() => import("@/components/floating-navbar"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  posthog.capture("my event", { property: "value" });
  return (
    <html lang="en">
      <CSPostHogProvider>
        <FloatingNavbar />
        <body className={inter.className}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
