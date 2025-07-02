import { Layout } from "@/components/ui/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <html className="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  );
}
