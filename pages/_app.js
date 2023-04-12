import '../assets/styles/css/css-reset.css';
import '../assets/styles/css/bootstrap-grid.min.css';
import '../assets/styles/css/main.css';
import '../assets/styles/sass/styles.scss';
import Layout from '../components/layout';
import {Poppins} from 'next/font/google';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '700']});

function MyApp({Component, pageProps}) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
