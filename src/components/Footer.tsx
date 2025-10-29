// src/components/Footer.tsx
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { userData } from '../../data/cvData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-text text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href={userData.contact.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gold-accent transition-colors text-2xl"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          {/* Add other social media icons if you extend userData.contact */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {userData.name}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
            <Link href="#about" className="hover:text-gold-accent">About</Link>
            <Link href="#projects" className="hover:text-gold-accent">Projects</Link>
            <Link href="#contact" className="hover:text-gold-accent">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;