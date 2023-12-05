import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./globals.css";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { Providers } from "./providers";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olivia Jarl",
  description: "Olivia Jarl's portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        //className={inter.className}
        style={{
          height: "100vh",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </body>
    </html>
  );
}
