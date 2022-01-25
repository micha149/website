import React, { ReactNode } from 'react';
import clsx from 'clsx';

type HeroProps = {
    className?: string,
    children?: ReactNode,
};

const Hero = ({ className, children }: HeroProps): JSX.Element => {
    return (
        <div className={clsx('relative', className)}>
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="w-72 h-72 max-w-full max-h-full relative opacity-[.35]">
                    <div className="absolute top-0 -left-20 w-full h-full bg-emerald-500 rounded-full mix-blend-soft-light filter blur-2xl animate-hero -delay-5" />
                    <div className="absolute top-0 -right-20 w-full h-full bg-sky-500 rounded-full mix-blend-soft-light filter blur-2xl animate-hero" />
                    <div className="absolute -bottom-16 w-full h-full bg-blue-600 rounded-full mix-blend-soft-light filter blur-2xl animate-hero -delay-10" />
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center ">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Hero;
