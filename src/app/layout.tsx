import type { Metadata } from "next";
import './globals.css';
import StoreProvider from "./StoreProvider";
import { Analytics } from "@vercel/analytics/next";

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
               <Analytics />
            </StoreProvider>
         </body>
      </html>
   );
}
