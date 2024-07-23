
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/mainLogo.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
        <title>SpinEdge</title>
      </Head>
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
