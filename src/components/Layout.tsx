// src/components/Layout.tsx
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>BYISHIMO KEVIN - Portfolio</title>
        <meta name="description" content="BYISHIMO KEVIN's portfolio showcasing full stack web development projects and skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;