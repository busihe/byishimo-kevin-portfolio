// src/components/Projects.tsx
import Section from './Section';
import Image from 'next/image';
import { userData } from '../../data/cvData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" className="bg-light-bg">
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Explore a selection of my recent work. Each project demonstrates my development skills and passion for creating impactful solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {userData.projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-text mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-gold-accent text-white rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all flex-grow"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border-2 border-gold-accent text-gold-accent rounded-full text-sm font-semibold hover:bg-gold-accent hover:text-white transition-all flex-grow"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href={userData.contact.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-dark-text text-white rounded-full text-lg font-semibold hover:bg-gold-accent transition-all shadow-xl"
        >
          <FaGithub className="mr-3 text-2xl" /> View All Projects on GitHub
        </a>
      </div>
    </Section>
  );
};

export default Projects;