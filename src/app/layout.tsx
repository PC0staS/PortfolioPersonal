import "./globals.css";
import { unstable_ViewTransition as ViewTransition } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pablo Costas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-[#0e0e0e] text-white">
      <body
        className={`antialiased min-h-screen w-full bg-[#0e0e0e] overflow-x-hidden`}
        style={{ boxSizing: "border-box", scrollBehavior: "smooth"  }}
      >
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
