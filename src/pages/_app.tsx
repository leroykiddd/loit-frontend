import React from 'react';
import '../styles/index.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { Header } from '@/components/ui';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

