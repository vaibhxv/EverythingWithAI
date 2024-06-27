import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import ModalProvider from "@/components/modal-provider";
import ToasterProvider from "@/components/toaster-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EverythingwithAI",
  description: "AI Platform."
};

//export const dynamic = 'force-static'

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
         
        </body>
      </html>
    </ClerkProvider>
  );
}
