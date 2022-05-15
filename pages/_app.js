import Head from 'next/head';
// commit
import '../styles/HeroSection.css';
import '../styles/globals.css';
import '../styles/LabelInput.css';
import '../styles/Body.css';
import '../styles/Header.css';
import '../styles/OurFeatures.css';
import '../styles/Footer.css';
import '../styles/LabelTextAreaInput.css';
import '../styles/ThankYou/ThankYou.css';
import '../styles/Feature/Feature.css';
import '../styles/Demo/Demo.css';
import '../styles/404/404.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* // Responsive meta tag */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* //  bootstrap CDN */}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossOrigin='anonymous'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
          crossOrigin='anonymous'
        ></script>

        <script src='https://unpkg.com/@material-ui/core@4.11.0/umd/material-ui.production.min.js'></script>
        <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
