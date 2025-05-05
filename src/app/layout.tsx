import type { Metadata } from "next";
import './globals.css';
import StoreProvider from "./StoreProvider";

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
            <StoreProvider>
               {children}
            </StoreProvider>
         </body>
      </html>
   );
}
