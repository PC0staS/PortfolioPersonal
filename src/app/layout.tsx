import "./globals.css";
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased justify-center mx-auto text-white overflow-x-hidden bg-[#0e0e0e]`}
        style={{ boxSizing: "border-box", fontFamily:"Poppins, sans-serif" }}
      >
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
