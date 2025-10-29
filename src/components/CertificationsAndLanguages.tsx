// src/components/CertificationsAndLanguages.tsx
import Section from './Section';
import { userData } from '../../data/cvData';
import { FaAward, FaLanguage } from 'react-icons/fa';

const CertificationsAndLanguages: React.FC = () => {
  return (
    <Section id="certifications-languages" title="Certifications & Languages" className="bg-light-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Certifications */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 animate-fade-in-left">
          <h3 className="text-3xl font-bold text-dark-text mb-6 flex items-center">
            <FaAward className="mr-4 text-gold-accent text-4xl" /> Certifications
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
            {userData.certifications.map((cert, index) => (
              <li key={index} className="flex items-center">
                <span className="font-semibold text-xl text-dark-text mr-2">{cert.title}</span> ({cert.year})
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 animate-fade-in-right">
          <h3 className="text-3xl font-bold text-dark-text mb-6 flex items-center">
            <FaLanguage className="mr-4 text-gold-accent text-4xl" /> Languages
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
            {userData.languages.map((lang, index) => (
              <li key={index} className="flex items-center">
                <span className="font-semibold text-xl text-dark-text mr-2">{lang.split('(')[0].trim()}</span> ({lang.split('(')[1].replace(')', '')})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default CertificationsAndLanguages;