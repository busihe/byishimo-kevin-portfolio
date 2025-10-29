// src/components/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-dark-text text-center mb-12 ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;