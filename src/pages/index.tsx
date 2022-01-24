import React from 'react';
import { Helmet } from "react-helmet"
import mainImage from '../images/main.png';

const Home = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
        <Helmet htmlAttributes={{lang: 'de'}}>
            <title>Michael van Engelshoven</title>
            <meta name="description" content="Homepage von Michael van Engelshoven, Fullstack Developer" />
        </Helmet>

        <img src={mainImage} alt="Stilistischer Schriftzug: Michael van Engelshoven, coming soon" />
    </div>
);

export default Home;
