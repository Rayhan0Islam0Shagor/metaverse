import Head from 'next/head';
import Login from '../components/Login/Login';
import { useMoralis } from 'react-moralis';
import FirstPage from '../components/Home/FirstPage';

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated)
    return (
      <>
        <Head>
          <title>login | METAVERSE</title>
          <link rel="icon" href="/meta-interactive.png" />
        </Head>
        <Login />
      </>
    );

  return (
    <div className="h-screen scrollbar-hide bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>METAVERSE</title>
        <link rel="icon" href="/meta-interactive.png" />
      </Head>

      <FirstPage />
    </div>
  );
}
