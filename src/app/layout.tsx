import "./globals.css";
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased justify-center mx-auto bg-[#0e0e0e] text-white overflow-x-hidden`}
        style={{ boxSizing: "border-box", scrollBehavior: "smooth"  }}
      >
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
