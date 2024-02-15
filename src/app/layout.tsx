import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "400", "700", "600"], variable: "--font-poppins" });


export const metadata: Metadata = {
  title: "Devs Norte",
  description: "A maior comunidade de Desenvolvedores do Norte do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
