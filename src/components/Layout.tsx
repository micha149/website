import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Vignette from '../components/Vignette';
import { Image as Love } from '../images/heart.svg';

type LayoutProps = {
    className?: string,
    children: ReactNode,
};

const Layout = ({ children, className }: LayoutProps): JSX.Element => {
    return (
        <div className={clsx('relative overflow-hidden p-5 w-screen', className)}>
            <main>
                {children}
            </main>
            <footer className="mt-20 mb-10">
                <p className="font-display text-sm text-center my-2">
                    Created with
                    <span className="inline-block translate-y-1 mx-2">
                        <Love
                            aria-label="love"
                            className=" w-5 text-pink-500 animate-heartbeat"
                        />
                    </span>
                    by Michael van Engelshoven
                </p>
                <p className="font-display text-sm text-slate-400 text-center">
                    <a
                        className="hover:underline underline-offset-2 decoration-1"
                        href="https://github.com/micha149/website"
                    >
                        Source on Github
                    </a>
                </p>
            </footer>

            <Vignette />
        </div>
    );
};

export default Layout;