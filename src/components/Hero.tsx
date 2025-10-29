// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { userData } from '../../data/cvData';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-light-blue-bg min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-16 md:py-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in-left">
          <p className="text-xl md:text-2xl text-gold-accent font-semibold mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-dark-text leading-tight mb-4">
            {userData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
            {userData.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            {userData.profile.split('. ')[0]}.
          </p> {/* Display first sentence of profile */}

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="#projects" className="px-8 py-3 bg-gold-accent text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
              View My Projects
            </Link>
            <a
              href="/BYISHIMO_KEVIN_CV.pdf" // Make sure to place your CV in the public folder
              download="BYISHIMO_KEVIN_CV.pdf"
              className="px-8 py-3 border-2 border-gold-accent text-gold-accent rounded-full text-lg font-semibold hover:bg-gold-accent hover:text-white transition-all shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/byishimo-kevin.jpg" // Path to your image in public/images
              alt={userData.name}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      {/* Subtle background patterns from the original image (optional, create this image if you want it) */}
      {/* <div className="absolute top-0 left-0 w-full h-full opacity-10 hidden md:block">
        <Image src="/images/background-pattern.png" alt="background pattern" layout="fill" objectFit="cover" />
      </div> */}
    </section>
  );
};

export default Hero;