import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import AppLayoutProvider from "@/components/layout/AppLayoutProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Specify the weights you want
});

export const metadata: Metadata = {
  title: "Madmon | My Units",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased tracking-tighter`}>
        <AppLayoutProvider>{children}</AppLayoutProvider>
      </body>
    </html>
  );
}
