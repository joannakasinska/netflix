import type { AppProps } from 'next/app';
import { Layout } from 'components';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout cms={pageProps?.data?.layout}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
