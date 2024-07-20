import Activities from '@/containers/Activities';
import Certificates from '@/containers/Certificates';
import Education from '@/containers/Education';
import Header from '@/containers/Header';
import Hero from '@/containers/Hero';
import Introduction from '@/containers/Introduction';
import Jobs from '@/containers/Jobs';
import Languages from '@/containers/Languages';
import Projects from '@/containers/Projects';
import Skills from '@/containers/Skills';
import activities from '@/contents/activities';
import certificates from '@/contents/certificates';
import education from '@/contents/education';
import jobs from '@/contents/jobs';
import languages from '@/contents/languages';
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
        <Education payload={education} />
        <Activities payload={activities} />
        <Languages payload={languages} />
        <Certificates payload={certificates} />
      </main>
    </>
  );
}
