import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "400", "700", "600"], variable: "--font-poppins" });
import "./globals.css";
import { ThemeProvider } from "@/components/ContextAPI/ThemeContext";
import {DefaultSeo} from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <DefaultSeo
                title="Devs Norte"
                description="A maior comunidade do norte do Brasil."
                openGraph={{
                    type: 'website',
                    locale: 'pt_BR',
                    url: 'https://devsnorte.com/pt',
                    siteName: 'Devs Norte',
                    images: [{
                        url: 'https://devsnorte.com/images/networking.png',
                        width: 850,
                        height: 650,
                        alt: 'Photo of text',
                    }],
                }}
                twitter={{
                    handle: '@DevsNorte',
                    site: 'https://devsnorte.com/pt',
                    cardType: 'summary_large_image',
                }}
            />
        <ThemeProvider>
            <main className={poppins.className}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
        </>
    );
}

export default appWithTranslation(MyApp);
