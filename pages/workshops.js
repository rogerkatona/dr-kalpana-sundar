import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Offerings from "../components/offerings";
import Services from "../components/services";
import BookACall_04 from "../components/bookACall_04";
import Quote from "../components/quote";

export default function Workshops() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero_workshops md:min-h-screen25vh md:max-h-screen25vh bg-cover bg-center bg-no-repeat flex flex-col justify-center">
                <Hero id={1}/>
            </header>
            <Offerings type="workshops"/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                In Person Workshop
            </div>
            <Services type="workshop" subtype="in-person"/>
            <BookACall_04/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Virtual Workshop
            </div>
            <Services type="workshop" subtype="virtual"/>
            <Quote id={1}/>
        </Layout>
    )
}