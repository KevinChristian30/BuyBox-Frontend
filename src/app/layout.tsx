import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import NextTopLoader from "nextjs-toploader";
import Colors from "@/constants";
import { CookiesProvider } from "next-client-cookies/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuyBox",
  description: "Blockchain Based e-commerce Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <CookiesProvider>
            <NextTopLoader
              color={Colors.primary}
              zIndex={9999}
              showSpinner={false}
            />
            {children}
          </CookiesProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
