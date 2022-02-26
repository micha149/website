import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/ButtonLink';
import Layout from '../components/Layout';
import { Image as ArrowIcon } from '../images/arrow-left.svg';

const ImprintPage = (): JSX.Element => (
    <Layout>
        <main className="max-w-prose mx-auto font-body leading-relaxed">
            <h1 className="font-display text-5xl text-pink-500 font-light mt-20">Impressum</h1>

            <p className="my-6">
                Michael van Engelshoven<br/>
                Nobelstraße 64<br/>
                53757 Sankt Augustin<br/>
                Deutschland
            </p>

            <p className="my-6">
                E-Mail:<br/>
                michael@van-engelshoven.de
            </p>

            <p className="my-6">
                Datenschutz:<br />
                <Link to="/datenschutz">https://michael-van-engelshoven.de/datenschutz</Link>
            </p>

            <h2 className="text-2xl text-sky-500 mt-12 mb-6">Haftungshinweis</h2>
            <p className="my-6">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links.
                Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
        </main>

        <footer className="mx-auto text-center mb-20 mt-10">
            <Button href="/" icon={<ArrowIcon />}>Zurück</Button>
        </footer>
    </Layout>
);

export default ImprintPage;
