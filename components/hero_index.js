

export default function HeroIndex() {

    return (
        <section className="flex flex-row min-h-screen60vh max-h-screen60vh bg-0.1.hero bg-cover bg-center bg-no-repeat">

            <div className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto lg:px-0 px-6">

{/*                <div className="font-bebasNeue text-gray.200 text-xl">
                    Featured video
                </div>*/}

                <div className="font-bebasNeue text-gray.300 md:text-5xl text-5xl">
                   Professional Women. Empowerment. Leadership. Entrepreneurship.
                </div>

                <div className="flex space-x-2 pt-6">
                        <a
                            className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg"
                            href="https://calendly.com/drkalpanasundar"
                            target="_blank"
                            rel="noreferrer">
                            Book A Call
                        </a>
                </div>
            </div>

        </section>
    )}
