import { motion} from "framer-motion"
import VideoBackground from "./videoBackground";
import ModalVideo from "./modal-video";
import useModal from "../lib/useModal";


export default function HeroIndex() {

    const {isShowing, toggle} = useModal();

    return (
        <section className="flex flex-row min-h-screen60vh max-h-screen60vh justify-center items-center relative bg-black.100">

            <div className="absolute z-10 ">
                <div className="flex flex-col justify-center text-center max-w-7xl mx-auto lg:px-12 px-6 lg:pt-80">
                    <motion.div
                        initial={{ opacity: 0, x: 0, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1,
                        }}
                    >
                     <div className="font-bebasNeue text-gray.300 md:text-5xl text-4xl">
                            Professional Women. Empowerment. Leadership. Entrepreneurship.
                        </div>
                    </motion.div>


                    <div className="space-x-4 pt-6 ">
                        <a
                            className="hover:bg-rust.800 text-white.75 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.75T rounded-lg"
                            href="https://calendly.com/drkalpanasundar"
                            target="_blank"
                            rel="noreferrer">
                            Book A Call
                        </a>
                        <a
                            className="hover:bg-rust.800 text-white.75 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.75T rounded-lg cursor-pointer"
                            target="_blank"
                            onClick={toggle}>
                            Watch video
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <VideoBackground />
            </div>
            <section>
                <ModalVideo
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>

        </section>

    )}
