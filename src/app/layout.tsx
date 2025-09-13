
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased justify-center mx-auto bg-dark text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
