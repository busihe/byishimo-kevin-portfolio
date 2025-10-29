// src/components/EducationAndTraining.tsx
import Section from './Section';
import { userData } from '../../data/cvData';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

const EducationAndTraining: React.FC = () => {
  return (
    <Section id="education" title="Education & Training">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="animate-fade-in-left">
          <h3 className="text-3xl font-bold text-dark-text mb-8 flex items-center">
            <FaGraduationCap className="mr-4 text-gold-accent text-4xl" /> Education
          </h3>
          <div className="space-y-8">
            {userData.education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-gold-accent group">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-gold-accent rounded-full flex items-center justify-center text-white text-sm">
                  {index + 1}
                </span>
                <p className="text-lg text-gray-500 mb-1">{edu.year}</p>
                <h4 className="text-2xl font-semibold text-dark-text">{edu.degree}</h4>
                <p className="text-xl text-gray-700">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Column */}
        <div className="animate-fade-in-right">
          <h3 className="text-3xl font-bold text-dark-text mb-8 flex items-center">
            <FaChalkboardTeacher className="mr-4 text-gold-accent text-4xl" /> Trainings
          </h3>
          <div className="space-y-8">
            {userData.trainings.map((training, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-gold-accent group">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-gold-accent rounded-full flex items-center justify-center text-white text-sm">
                  {index + 1}
                </span>
                <p className="text-lg text-gray-500 mb-1">{training.year} ({training.duration})</p>
                <h4 className="text-2xl font-semibold text-dark-text">{training.title}</h4>
                <p className="text-xl text-gray-700">{training.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationAndTraining;