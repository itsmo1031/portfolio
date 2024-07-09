import Header from '@/containers/Header';
import Hero from '@/containers/Hero';
import Introduction from '@/containers/Introduction';
import Jobs from '@/containers/Jobs';
import Skills from '@/containers/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto text-[#262626]">
        <Hero />
        <Introduction />
        <Jobs />
        <Skills />
      </main>
    </>
  );
}
