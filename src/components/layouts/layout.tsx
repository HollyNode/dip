// src/components/layouts/layout.tsx
import Head from 'next/head';
import { metadata } from '../../metadata'; // Adjust the relative path as needed

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
