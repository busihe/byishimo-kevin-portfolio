// src/components/Skills.tsx
import Section from './Section';
import { userData } from '../../data/cvData';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaPaintBrush } from 'react-icons/fa';

const skillIcons: { [key: string]: JSX.Element } = {
  languages: <FaCode />,
  frameworks: <FaLaptopCode />,
  databases: <FaDatabase />,
  tools: <FaTools />,
  creative: <FaPaintBrush />,
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(userData.technicalSkills).map(([category, skills]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 animate-fade-in-up">
            <div className="flex items-center mb-4 text-gold-accent">
              <span className="text-3xl mr-3">{skillIcons[category]}</span>
              <h3 className="text-2xl font-semibold capitalize text-dark-text">
                {category.replace(/([A-Z])/g, ' $1')} {/* Add space before capital letters for readability */}
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;