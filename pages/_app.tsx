import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

// Dynamically import ToastContainer with SSR disabled to prevent hydration errors
const ToastContainerClient = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false }
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainerClient />
    </>
  );
};

export default MyApp;
