import { cn } from '@/util';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & React.PropsWithChildren;

function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `text-white block bg-brandColor rounded-full shadow-[3px_4px_50px_0px_rgba(24,171,11,0.15)] p-3 `,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
