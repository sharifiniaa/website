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
export default MyApp;
