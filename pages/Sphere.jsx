import Head from 'next/head';
import Sphere from '../components/Sphere';
import NavigationBar from '../components/NavigationBar';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Three.js Sphere</title>
      </Head>
      <NavigationBar />
      <main>
        <Sphere />
      </main>
    </div>
  );
};

export default HomePage;
