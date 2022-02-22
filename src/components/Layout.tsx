import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
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
                <p className="font-display text-sm text-center my-4">
                    Created with
                    <span className="inline-block translate-y-1 mx-2">
                        <Love
                            aria-label="love"
                            className=" w-5 text-pink-500 animate-heartbeat"
                        />
                    </span>
                    by Michael van Engelshoven
                </p>

                <nav className="font-display text-sm text-slate-400 text-center my-2">
                    <ul className="flex justify-center divide-x divide-slate-600 leading-none">
                        <li className="px-2">
                            <Link className="hover:underline underline-offset-2 decoration-1" to="/impressum">
                                Impressum
                            </Link>
                        </li>
                        <li className="px-2">
                            <Link className="hover:underline underline-offset-2 decoration-1" to="/datenschutz">
                                Datenschutz
                            </Link>
                        </li>
                    </ul>
                </nav>

                <p className="font-display text-sm text-slate-400 text-center my-2">
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
