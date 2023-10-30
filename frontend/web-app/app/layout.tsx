import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./nav/Navbar";

export const metadata: Metadata = {
  title: "AuctionWheels",
  description: "AuctionWheels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto px-5 pt-10">{children}</main>
      </body>
    </html>
  );
}
