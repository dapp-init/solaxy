import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title: "Solaxy: Discover SOLX Token and the Solaxy Crypto Presale",
  description: "",
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
