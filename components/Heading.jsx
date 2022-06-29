/*  ./components/Heading.jsx     */
import Head from 'next/head'
import Script from 'next/script'

export const Heading = () => {
  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <title>Share Secret Feedback about Clemie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Share Secret Feedback about Clemie" />
        <meta name="description" content="Get anonymous feedback from your Friends & Coworkers." />
        <meta name="keywords" content="clemie, secreto, mclemie, ganteng abis" />
        <meta name="author" content="mclemie" />
        <meta property="og:image" content="../logo.png" />
        <link rel="shortcut icon" href="../logo.png" />
        </Head>
        <Script src="https://analytics.mcley.me/latest.js"></Script>
    </>
  );
};