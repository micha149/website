import React, { ReactNode } from 'react';
import clsx from 'clsx';

type SectionHeadingProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode
    className?: string,
};

const SectionHeading = ({as: Component = 'h2', className, children }: SectionHeadingProps): JSX.Element => {
    return (
        <Component className={clsx('text-center font-display text-5xl font-light text-pink-500', className)}>
            {children}
        </Component>
    );
};

export default SectionHeading;
