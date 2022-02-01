import React from 'react';
import { Helmet } from "react-helmet"
import Hero from '../components/Hero';
import LogoLink from '../components/LogoLink';
import { Image as Writing } from '../images/micha149-writing.svg';
import { Image as GithubLogo } from '../images/github.svg';
import { Image as TwitterLogo } from '../images/twitter.svg';
import { Image as XingLogo } from '../images/xing.svg';

const Home = () => (
    <>
        <Helmet htmlAttributes={{lang: 'de'}}>
            <title>Michael van Engelshoven</title>
            <meta name="description" content="Homepage von Michael van Engelshoven, Fullstack Developer" />
        </Helmet>

        <header>
        <Hero className="min-h-screen">
            <h1>
                <span id="pageTitle" className="sr-only">micha149's website</span>
                <Writing aria-describedby="pageTitle" className="w-64 -rotate-6 dark:text-slate-200"/>
            </h1>
        </Hero>
        </header>

        <section>
            <h2 className="text-center font-display text-5xl font-light text-pink-500 mt-32 mb-32">Weitere Profile im Web</h2>
            <ul className="flex gap-8 justify-center mb-32">
                <li className="w-1/6 flex justify-center">
                    <LogoLink
                        description="Mein Github-Profil"
                        href="https://github.com/micha149"
                        logo={<GithubLogo />}
                    />
                </li>
                <li className="w-1/6 flex justify-center">
                    <LogoLink
                        description="Meine Tweets"
                        href="https://twitter.com/micha149"
                        logo={<TwitterLogo />}
                    />
                </li>
                <li className="w-1/6 flex justify-center">
                    <LogoLink
                        description="Mein Profil auf Xing"
                        href="https://www.xing.com/profile/Michael_vanEngelshoven"
                        logo={<XingLogo />}
                    />
                </li>
            </ul>
        </section>
    </>
);

export default Home;
