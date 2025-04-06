import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
   title: "Welcome",
   description: "Welcome",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`bg-dark-900 antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
