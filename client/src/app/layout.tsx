import { Inter } from "next/font/google";

// Styles
import "./globals.css";

// Components
import Navbar from "@/components/common/Navbar";
import HuddleContextProvider from "@/components/ClientComponents/HuddleContextProvider";
import { cn } from "@/utils/helpers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huddle AI Agents",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(" relative font-inter min-h-screen", inter.className)}
      >
        <Navbar />
        <HuddleContextProvider>{children}</HuddleContextProvider>
      </body>
    </html>
  );
}
