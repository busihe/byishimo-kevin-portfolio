// src/pages/index.tsx
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import EducationAndTraining from '../components/EducationAndTraining';
import CertificationsAndLanguages from '../components/CertificationsAndLanguages';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationAndTraining />
      <CertificationsAndLanguages />
      <Contact />
    </Layout>
  );
};

export default Home;