import Head from "next/head";
import "@/styles/globals.scss";
import Layout from "../pages/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next App | devBammy</title>
        <meta name="description" content="My first Next.js App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keyword"
          content="devBammy, olorunyomi emmanuel, emmanuel olorunyomi"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
