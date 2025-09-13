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
        className={`antialiased justify-center mx-auto bg-dark text-white overflow-x-hidden`}
        style={{ boxSizing: "border-box" }}
      >
        <ViewTransition>
          {children}
        </ViewTransition>
      </body>
    </html>
  );
}
