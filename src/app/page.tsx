import Header from '@/containers/Header';
import Hero from '@/containers/Hero';
import Introduction from '@/containers/Introduction';
import Jobs from '@/containers/Jobs';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Hero />
        <Introduction />
        <Jobs />
      </main>
    </>
  );
}
