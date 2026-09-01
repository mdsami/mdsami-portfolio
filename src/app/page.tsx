import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyChooseMe } from '@/components/WhyChooseMe';
import { SkillsTerminal } from '@/components/SkillsTerminal';
import { Projects } from '@/components/Projects';
import { GitHubActivity } from '@/components/GitHubActivity';
import { Journey } from '@/components/Journey';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseMe />
        <SkillsTerminal />
        <Projects />
        <GitHubActivity />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
