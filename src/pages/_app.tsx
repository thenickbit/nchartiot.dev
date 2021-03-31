import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
