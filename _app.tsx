import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { store } from '../store/store';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
