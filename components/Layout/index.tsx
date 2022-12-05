import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = (props: React.PropsWithChildren) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('amfe-flexible');
  }, []);
  return (
    <div>
      <Head>
        <title>lexus 雷克萨斯</title>
        <meta content="雷克萨斯 lexus 雷克" name="keywords" />
        <meta content="雷克萨斯，Lexus 雷克，雷克萨斯官网" name="description" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, use-scalable=no"
          name="viewport"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
