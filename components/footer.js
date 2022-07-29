import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";



export default function Footer() {


    return (
        <footer className="flex flex-col justify-center lg:items-center lg:px-0 px-12 bg-blue.700 text-white py-48 space-y-6">
            <section>
                <Link href='/'>
                    <a>
                        <div className="flex flex-row items-center ">

                            <svg
                                className='w-72 '
                                fill='#FFFFFF'
                                stroke='none'
                                viewBox='0 0 400 31'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d="M3.44,.26c1.26-.06,2.5-.08,3.72-.08s2.51,.13,3.87,.39c1.36,.26,2.71,.75,4.05,1.46,1.33,.72,2.47,1.63,3.4,2.76s1.68,2.6,2.26,4.44c.57,1.83,.86,4.07,.86,6.69s-.42,4.98-1.27,7.06c-.84,2.08-2,3.68-3.47,4.78-2.84,2.16-6.27,3.24-10.29,3.24-1.4,0-2.88-.06-4.43-.18H0V.26H3.44Zm.13,30.2c.6,.06,1.36,.08,2.28,.08s1.6-.01,2.07-.04c.46-.03,1.09-.15,1.89-.37s1.55-.52,2.24-.9c.69-.38,1.41-.94,2.17-1.68s1.41-1.62,1.96-2.65c1.24-2.39,1.85-5.51,1.85-9.36,0-2.74-.33-5.11-.99-7.1-.66-2-1.41-3.47-2.26-4.44-.84-.96-1.87-1.72-3.07-2.29s-2.16-.9-2.88-.98-1.55-.13-2.5-.13-1.86,.04-2.76,.13V30.47Z"
                                />

                                <path d="M26.33,.57c3.33-.23,6.27-.35,8.82-.35,7.08,0,10.63,2.4,10.63,7.21,0,2.04-.49,3.86-1.47,5.46s-2.65,2.67-5.03,3.19l8.61,14.73h-4l-8.43-14.47h-5.55v14.47h-3.57V.57Zm8.82,.08c-1.66,0-3.41,.1-5.25,.3V15.91h6.37c4.05-.18,6.07-2.97,6.07-8.39,0-2.22-.6-3.91-1.81-5.09-1.21-1.18-3-1.77-5.38-1.77h0Z"
                                />

                                <path d="M51.77,30.99c-.37,0-.69-.14-.97-.41-.27-.28-.41-.61-.41-1.01s.13-.72,.39-.98,.58-.39,.97-.39,.72,.14,.99,.41c.27,.28,.41,.61,.41,.98s-.14,.7-.41,.98-.6,.41-.97,.41h0Z"/><path d="M73.37,.22V19.54L87.27,.22l.34,.3-7.71,10.67,11.45,19.63h-4l-9.64-16.57-4.35,6.08v10.49h-3.57V.22h3.58Z"
                            />

                                <path d="M94.46,30.82h-.52L106.81,.22l.48-.22,10.85,30.82h-3.66l-3.36-9.62h-12.56l-4.09,9.62h0Zm11.01-25.88l-6.76,15.82h12.26l-5.51-15.82h0Z"
                                />

                                <path d="M138.35,30.82h-16.35V.22h3.57V30.38h12.78v.44Z"
                                />

                                <path d="M142.66,.57c3.33-.23,6.25-.35,8.78-.35,7.11,0,10.67,2.55,10.67,7.65,0,2.36-.6,4.43-1.81,6.2-.63,.96-1.61,1.72-2.92,2.29-1.32,.57-2.91,.85-4.77,.85h-6.37v13.59h-3.57V.57h0Zm8.82,.08c-1.66,0-3.41,.1-5.25,.3v15.83h6.37c4.05-.18,6.07-3.12,6.07-8.83,0-2.33-.6-4.13-1.81-5.4-1.21-1.27-3-1.9-5.38-1.9h0Z"
                                />

                                <path d="M160.47,30.82h-.52L172.82,.22l.48-.22,10.85,30.82h-3.66l-3.36-9.62h-12.56l-4.09,9.62h0Zm11.01-25.88l-6.76,15.82h12.26l-5.51-15.82h0Z"
                                />

                                <path d="M188.36,30.82h-.56V.22h1.47l17.9,28.28V.22h.56V30.82h-3.14l-16.22-25.35V30.82Z"
                                />

                                <path d="M211.9,30.82h-.52L224.25,.22l.48-.22,10.85,30.82h-3.66l-3.36-9.62h-12.56l-4.09,9.62Zm11.01-25.88l-6.76,15.82h12.26l-5.51-15.82h0Z"
                                />

                                <path d="M268.62,2.05c-2.61-1.02-5.07-1.53-7.38-1.53s-4.11,.5-5.4,1.49c-1.29,.99-1.94,2.36-1.94,4.11,0,2.12,1.09,3.78,3.27,4.94,.98,.5,2.04,.95,3.21,1.38s2.33,.9,3.51,1.42,2.25,1.12,3.23,1.79c.98,.67,1.77,1.6,2.37,2.77s.9,2.68,.9,4.5-.5,3.38-1.51,4.66c-1.01,1.28-2.22,2.15-3.64,2.6-1.42,.46-3.07,.68-4.97,.68-3.53,0-6.54-.89-9.04-2.67l.22-.35c.95,.76,2.17,1.38,3.68,1.86s3.05,.72,4.62,.72c2.32,0,4.31-.55,5.96-1.64,1.65-1.09,2.47-2.7,2.47-4.83,0-2.33-1.09-4.15-3.27-5.46-.98-.58-2.04-1.12-3.21-1.61-1.16-.5-2.33-1.01-3.51-1.55s-2.25-1.14-3.23-1.82c-2.18-1.46-3.27-3.53-3.27-6.2,0-2.12,.71-3.86,2.11-5.18,1.4-1.32,3.52-1.99,6.35-1.99s5.7,.5,8.63,1.49l-.17,.44h0Z"
                                />

                                <path d="M295.6,.22h.56V17.7c0,4.58-.89,7.94-2.67,10.08-1.78,2.14-4.11,3.21-6.97,3.21-1.81,0-3.34-.17-4.61-.5-1.26-.33-2.45-.95-3.57-1.86-2.3-1.81-3.44-5.45-3.44-10.93V.22h3.57V17.66c0,5.31,.79,8.85,2.37,10.62,.8,.87,1.64,1.47,2.52,1.79,.87,.32,1.93,.48,3.17,.48,2.76,0,4.96-1.03,6.61-3.08,1.65-2.05,2.47-5.32,2.47-9.81V.22h0Z"
                                />

                                <path d="M301.88,30.82h-.56V.22h1.47l17.9,28.28V.22h.56V30.82h-3.14l-16.22-25.35V30.82h0Z"
                                />

                                <path d="M330.5,.26c1.26-.06,2.5-.08,3.72-.08s2.51,.13,3.87,.39,2.71,.75,4.05,1.46c1.33,.72,2.47,1.63,3.4,2.76s1.68,2.6,2.26,4.44c.57,1.83,.86,4.07,.86,6.69s-.42,4.98-1.27,7.06c-.84,2.08-2,3.68-3.47,4.78-2.84,2.16-6.27,3.24-10.29,3.24-1.4,0-2.88-.06-4.43-.18h-2.15V.26h3.45Zm.13,30.2c.6,.06,1.36,.08,2.28,.08s1.6-.01,2.07-.04c.46-.03,1.09-.15,1.89-.37s1.55-.52,2.24-.9c.69-.38,1.41-.94,2.17-1.68,.76-.74,1.41-1.62,1.96-2.65,1.23-2.39,1.85-5.51,1.85-9.36,0-2.74-.33-5.11-.99-7.1-.66-2-1.41-3.47-2.26-4.44s-1.87-1.72-3.07-2.29-2.16-.9-2.88-.98-1.55-.13-2.5-.13-1.86,.04-2.76,.13V30.47Z"
                                />

                                <path d="M350.9,30.82h-.52L363.25,.22l.48-.22,10.85,30.82h-3.66l-3.36-9.62h-12.56l-4.09,9.62h0Zm11.01-25.88l-6.76,15.82h12.26l-5.51-15.82h0Z"
                                />

                                <path d="M378.44,.57c3.33-.23,6.27-.35,8.82-.35,7.08,0,10.63,2.4,10.63,7.21,0,2.04-.49,3.86-1.47,5.46s-2.65,2.67-5.03,3.19l8.61,14.73h-4l-8.43-14.47h-5.55v14.47h-3.57V.57h0Zm8.82,.08c-1.66,0-3.41,.1-5.25,.3V15.91h6.37c4.05-.18,6.07-2.97,6.07-8.39,0-2.22-.6-3.91-1.81-5.09-1.21-1.18-3-1.77-5.38-1.77h0Z"
                                />

                            </svg>
                        </div>
                    </a>
                </Link>
            </section>

            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
            </div>
            <div>
                    <a
                        href="https://calendly.com/drkalpanasundar"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-rust.800 hover:text-white.100 hover:border-rust.800 text-xs text-gray.200 uppercase px-3 py-2  border border-gray.200 rounded-lg">
                        Book a call
                    </a>
            </div>
        </footer>
    )
}