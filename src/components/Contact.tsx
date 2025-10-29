// src/components/Contact.tsx
import Section from './Section';
import { userData } from '../../data/cvData';
import { FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-light-bg">
      <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        I' m always open to new opportunities, collaborations, and conversations. Feel free to reach out to me!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Email */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow animate-fade-in-up">
          <FaEnvelope className="text-gold-accent text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-dark-text mb-2">Email Me</h3>
          <a href={`mailto:${userData.contact.email}`} className="text-lg text-gray-700 hover:text-gold-accent transition-colors">
            {userData.contact.email}
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow animate-fade-in-up delay-100">
          <FaPhone className="text-gold-accent text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-dark-text mb-2">Call Me</h3>
          <a href={`tel:${userData.contact.phone}`} className="text-lg text-gray-700 hover:text-gold-accent transition-colors">
            {userData.contact.phone}
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow animate-fade-in-up delay-200">
          <FaMapMarkerAlt className="text-gold-accent text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-dark-text mb-2">My Location</h3>
          <p className="text-lg text-gray-700">{userData.contact.location}</p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow animate-fade-in-up delay-300">
          <FaGithub className="text-gold-accent text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-dark-text mb-2">GitHub</h3>
          <a href={userData.contact.githubLink} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-gold-accent transition-colors">
            {userData.contact.github}
          </a>
        </div>
      </div>
      {/* Optional: Add a contact form here - Requires backend setup */}
      {/* <div className="mt-16 bg-white p-10 rounded-lg shadow-xl max-w-3xl mx-auto border border-gray-100">
        <h3 className="text-3xl font-bold text-dark-text mb-8 text-center">Send Me a Message</h3>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent" />
          <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent" />
          <input type="text" placeholder="Subject" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent" />
          <textarea placeholder="Your Message" rows={6} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent"></textarea>
          <button type="submit" className="w-full px-8 py-4 bg-gold-accent text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
            Send Message
          </button>
        </form>
      </div> */}
    </Section>
  );
};

export default Contact;