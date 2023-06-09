import { Html, Head, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
