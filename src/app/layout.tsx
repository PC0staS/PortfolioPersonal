import "./globals.css";
import { unstable_ViewTransition as ViewTransition } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pablocostas.dev"),
  title: {
    default: "Pablo Costas - Desarrollador Full Stack",
    template: "%s | Pablo Costas",
  },
  description:
    "Portfolio de Pablo Costas — desarrollador web y móvil. Proyectos en Next.js, React, TypeScript y más.",
  keywords: [
    "Pablo Costas",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "React Native",
    "Desarrollador",
    "Full Stack",
  ],
  authors: [{ name: "Pablo Costas", url: "https://pablocostas.dev" }],
  creator: "Pablo Costas",
  publisher: "Pablo Costas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://pablocostas.dev",
    title: "Pablo Costas - Desarrollador Full Stack",
    description:
      "Portfolio de Pablo Costas — desarrollador web y móvil. Proyectos en Next.js, React, TypeScript y más.",
    siteName: "Pablo Costas",
    locale: "es_ES",
    images: [
      {
        url: "/img/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Pablo Costas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Costas - Desarrollador Full Stack",
    description:
      "Portfolio de Pablo Costas — desarrollador web y móvil. Proyectos en Next.js, React, TypeScript y más.",
    images: ["/img/me.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0e" },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/img/favicon.png", type: "image/png" },
    ],
    apple: "/img/favicon.png",
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
        style={{ boxSizing: "border-box", scrollBehavior: "smooth" }}
      >
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}
