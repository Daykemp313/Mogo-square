import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MoGo Square",
  description: "District-based social commerce and professional networking platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
