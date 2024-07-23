
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
import { Raleway } from 'next/font/google'
import Head from 'next/head';
const raleway = Raleway({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/mainLogo.svg" />
        <title>SpinEdge</title>
      </Head>
      <body className={raleway.className}>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
