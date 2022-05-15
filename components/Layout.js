import Head from 'next/dist/next-server/lib/head';

import Header from './Header';
import Footer from './Footer';

function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossOrigin='anonymous'
        />
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Personal Injury Case Management',
  description:
    'Practice base provides a simple solution for managing personal injury cases though a software.',
  keywords:
    'case initiation, accident details, insurance information, appointments scheduling, digital signatures , document sharing',
};

export default Layout;
