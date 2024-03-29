import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import BookACall_02 from "../components/bookACall_02";
import Quote from "../components/quote";
import PlannerResources from "../components/planner-resources";
import GridPhoto from "../components/grid-photo";


export default function Planners() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero-planners md:min-h-screen25vh md:max-h-screen25vh bg-cover bg-left bg-no-repeat flex flex-col justify-center">
                <Hero id={4}/>
            </header>
{/*            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Welcome!</div>
            <div className='max-w-7xl mx-auto pb-12 lg:px-0 px-12 '>
                <img
                    className=""
                    src="/image/videoThumbnail-01.png"
                    alt="Alt"
                />
            </div>*/}
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center text-center bg-gray.100 py-12'>Resources</div>
            <PlannerResources/>
            <Quote id={1}/>
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center  bg-gray.100 py-12'>Headshots</div>
            <GridPhoto type="headshot"/>
            <BookACall_02/>
        </Layout>
    )
}