import inTheMediaItems from "../data/inTheMediaItems";
import Date from "./date";
import Link from "next/link";

export default function FeaturedMedia(props) {

    let filteredItem = inTheMediaItems.filter(function (item){
        return item.isFeatured === props.isFeatured
    });

    return (
        <>
            {filteredItem
                .filter(filteredItem => filteredItem.isOnHome === props.isOnHome)
                .map(filteredItem => (
                    <section
                        key={filteredItem.id}
                        className={`flex flex-col p-12 ${filteredItem.featuredID % 2 !== 0  ? 'bg-gray.100' : 'bg-gray.100'}`}>

                        <div className={`flex  flex-col  max-w-7xl mx-auto  ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <div className=''>
                                <img
                                    src={filteredItem.src}
                                    width={1000}
                                    alt={'Featured Article'}
                                />
                            </div>
                            <div className={`lg:w-4/5 w-full lg:pt-0 pt-6 ${filteredItem.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                <div className='text-rust.700'>
                                    <Link href={filteredItem.featuredHREF}>
                                        <a className='hover:underline uppercase text-xs'>{filteredItem.featuredURL}</a>
                                    </Link>
                                </div>
                                <div className='font-bebasNeue text-4xl text-gray.700 pb-4'>
                                    {filteredItem.featuredHeader}
                                </div>
                                <div className='text-xl text-gray.700'>
                                    {filteredItem.title}
                                </div>
                                <div className={` text-xs text-gray.500 ${filteredItem.type === 'about'  ? 'hidden' : 'block'}`}>
                                    {filteredItem.location} | <Date dateString={filteredItem.date} />
                                </div>
                                <div className='text-gray.700 py-4 '>{filteredItem.description}</div>
                                <div className="flex flex-row">
                                    <div>
                                        <Link href={filteredItem.featuredHREF}>
                                            <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                {filteredItem.featuredButtonLabel}
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'}  pl-2`}>
                                        <a href={filteredItem.buttonHref} target="_blank" rel="noreferrer">
                                            <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                {filteredItem.buttonText}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
        </>
    )
}






