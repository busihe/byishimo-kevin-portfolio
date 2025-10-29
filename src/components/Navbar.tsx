// src/components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { userData } from '../../data/cvData'; // Adjust path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-dark-text hover:text-gold-accent transition-colors">
          {userData.name.split(' ')[0]} <span className="text-gold-accent">{userData.name.split(' ')[1]}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-dark-text hover:text-gold-accent font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={userData.contact.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gold-accent text-white rounded-full hover:bg-opacity-90 transition-all font-semibold"
          >
            View GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-dark-text" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            <button className="absolute top-6 right-6 text-3xl text-dark-text" onClick={() => setIsOpen(false)} aria-label="Close navigation">
              <FaTimes />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl text-dark-text hover:text-gold-accent font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={userData.contact.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold-accent text-white rounded-full text-xl hover:bg-opacity-90 transition-all font-semibold"
              onClick={() => setIsOpen(false)}
            >
              View GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;