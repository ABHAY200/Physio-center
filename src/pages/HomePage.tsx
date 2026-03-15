import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Specialties } from '../components/Specialties';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Specialties />
      <About />
      <Contact />
    </>
  );
}
