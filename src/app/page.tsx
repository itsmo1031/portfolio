import Header from '@/containers/Header';
import Hero from '@/containers/Hero';
import Introduction from '@/containers/Introduction';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Hero />
        <Introduction />
      </main>
    </>
  );
}
