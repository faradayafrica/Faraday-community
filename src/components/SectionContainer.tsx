import React from 'react';
import { cn } from '@/util';

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section
      className={cn(
        'flex snap-start snap-always items-center min-h-screen md:p-16',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
