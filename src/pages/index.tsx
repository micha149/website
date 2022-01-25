import React from 'react';
import { Helmet } from "react-helmet"
import Hero from '../components/Hero';
import { Image as Writing } from '../images/micha149-writing.svg';

const Home = () => (
    <>
        <Helmet htmlAttributes={{lang: 'de'}}>
            <title>Michael van Engelshoven</title>
            <meta name="description" content="Homepage von Michael van Engelshoven, Fullstack Developer" />
        </Helmet>

        <Hero className="min-h-screen">
            <h1>
                <span id="pageTitle" className="sr-only">micha149's website</span>
                <Writing aria-describedby="pageTitle" className="w-64 -rotate-6 dark:text-slate-200"/>
            </h1>
        </Hero>
    </>
);

export default Home;
