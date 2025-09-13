import "./globals.css";
import { unstable_ViewTransition as ViewTransition } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pablo Costas",
  description: "Portfolio de Pablo Costas - Desarrollador Web y Móvil",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className=" ">
      <body
        className={`antialiased min-h-screen w-full bg-light dark:bg-[#0e0e0e] overflow-x-hidden text-black dark:text-white `}
        style={{ boxSizing: "border-box", scrollBehavior: "smooth"  }}
      >
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
