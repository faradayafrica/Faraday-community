import '@/globals.css';
import type { AppProps } from 'next/app';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-workSans' });
// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['300', '400', '500'],
//   variable: '--font-roboto',
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${workSans.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
