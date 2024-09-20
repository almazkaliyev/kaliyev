import Head from 'next/head'

import 'styles/app.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>kaliyev.</title>
        <meta content="Алмаз Калиев - Frontend разработчик" name="description" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="w-screen full-height p-4 flex justify-content-center items-center">
        <Component {...pageProps} />
      </main>
    </>
  )
}
