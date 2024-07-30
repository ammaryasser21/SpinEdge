
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
import { Raleway , Space_Grotesk } from 'next/font/google'
import Head from 'next/head';
const raleway = Raleway({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/mainLogo.svg" />
        <title>SpinEdge</title>
      </Head>
      <body>
        <Navbar className={raleway}/>
        <main className={`container ${raleway.className}`}>{children}</main>
        <Footer className={spaceGrotesk} />
      </body>
    </html>
  );
}
