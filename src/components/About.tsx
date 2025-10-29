// src/components/About.tsx
import Section from './Section';
import { userData } from '../../data/cvData';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-light-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Text */}
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
        <p dangerouslySetInnerHTML={{ __html: userData.profile }} />
          {/* You can add more detailed paragraphs here if needed */}
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-dark-text mb-6 text-center md:text-left">Get In Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gold-accent text-3xl" />
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <a href={`mailto:${userData.contact.email}`} className="text-dark-text text-xl font-medium hover:text-gold-accent transition-colors">
                  {userData.contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-gold-accent text-3xl" />
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <a href={`tel:${userData.contact.phone}`} className="text-dark-text text-xl font-medium hover:text-gold-accent transition-colors">
                  {userData.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-gold-accent text-3xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-dark-text text-xl font-medium">{userData.contact.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaGithub className="text-gold-accent text-3xl" />
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a href={userData.contact.githubLink} target="_blank" rel="noopener noreferrer" className="text-dark-text text-xl font-medium hover:text-gold-accent transition-colors">
                  {userData.contact.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;