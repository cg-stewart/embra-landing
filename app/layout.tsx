import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyEmbra",
  description: "Start With Embra, Stay With Embra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
