import Educations from '@/containers/Educations';
import Header from '@/containers/Header';
import Hero from '@/containers/Hero';
import Introduction from '@/containers/Introduction';
import Jobs from '@/containers/Jobs';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import educations from '@/contents/educations';
import jobs from '@/contents/jobs';
import projects from '@/contents/projects';
import skills from '@/contents/skills';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto text-[#262626]">
        <Hero />
        <Introduction />
        <Jobs payload={jobs} />
        <Skills payload={skills} />
        <Projects payload={projects} />
        <Educations payload={educations} />
      </main>
    </>
  );
}
