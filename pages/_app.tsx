import type { AppProps } from 'next/app';
import RootLayout from '../src/components/layouts/layout';
import TaskBar from '../src/components/TaskBar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash/debounce';
import '../src/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const navigateToIntro = debounce(() => {
      const hasVisitedBefore = (() => {
        try {
          return localStorage.getItem('hasVisitedBefore');
        } catch (error) {
          console.error('Error accessing localStorage:', error);
          return null;
        }
      })();

      if (!hasVisitedBefore) {
        try {
          localStorage.setItem('hasVisitedBefore', 'true');
          router.push('/intro');
        } catch (error) {
          console.error('Error setting localStorage:', error);
        }
      } else if (router.pathname === '/' && !router.pathname.startsWith('/intro')) {
        router.push('/#');
      }
    }, 1000);

    navigateToIntro();

    return () => navigateToIntro.cancel();
  }, [router]);

  const currentTime = new Date();

  return (
    <RootLayout>
      <Component {...pageProps} />
      <TaskBar time={currentTime} />
    </RootLayout>
  );
};

export default MyApp;
