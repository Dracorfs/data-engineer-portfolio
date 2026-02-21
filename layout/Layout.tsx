import { ReactNode } from 'react';
import Header from "../components/Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Andrés Martínez | Business Intelligence Developer</title>
        <meta name='description' content="Business Intelligence Developer | Data Engineer" />
        <link rel="icon" type="image/svg+xml" href="/img/redes.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://andres-martinez.vercel.app/"></link>
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Andres Martinez" />
        <meta name="keywords" content="Business Intelligence Developer, Data Engineer" />
        <meta name="og:title" content="Andrés Martínez | Business Intelligence Developer" />
        <meta name="og:description" content="Business Intelligence Developer | Data Engineer" />
        <meta name="og:image" content="/img/metaimg.webp" />
        <meta name="og:image:alt" content="Andrés Martínez - Portfolio" />
      </Head>

      <Header />

      <main className="font-text">
        {children}
      </main>
    </>
  );
};

export default Layout;
