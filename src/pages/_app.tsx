import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"]});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${ubuntu.className}`}>
            <Component {...pageProps} />
        </div>
    );
}
