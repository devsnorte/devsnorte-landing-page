import type { Metadata } from "next";
import { Html, Main, Head, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "Devs Norte",
  description: "A maior comunidade de Desenvolvedores do Norte do Brasil",
};

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
