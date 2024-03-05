import Header from "../components/Header"
import Head from "next/head"

export default function Layout({ children }) {

    return (
        <> 
            <Head>
                <title>Andres Martinez | Business Intelligence Developer</title>
                <meta name='description' content="Business Intelligence Developer" />
                <link rel="icon" type="image/svg+xml" href="/img/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://andres-martinez.vercel.app/"></link>
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Andres Martinez" />
                <meta name="keywords" content="Business Intelligence Developer" />
                <meta name="og:title" content="Andres Martinez | Business Intelligence Developer" />
                <meta name="og:description" content="Business Intelligence Developer" />
                <meta name="og:image" content="/img/metaimg.webp" />
                <meta name="og:image:alt" content="Imagen del sitio web de Andres Martinez" />
            </Head>
                
            <Header />

            <main className="font-text">
                { children }
            </main>
        </>
    )
}