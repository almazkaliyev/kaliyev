import { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';

import '@/styles/app.css';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>kaliyev.</title>
      <meta name="description" content="Алмаз Калиев - Frontend разработчик" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="w-screen full-height p-4 flex justify-content-center items-center">
      <Component {...pageProps} />
    </main>
  </>
);

export default App;
