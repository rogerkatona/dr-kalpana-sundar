// components/SocialMediaItem.js

import Link from "next/link";

const SocialMedia = props => (
    <div className="ml-2 filter transition duration-500 ease-in-out hover:brightness-75">
        <Link
            href={props.path}>
            <a>
                <img
                    src={props.src}
                    height={28}
                    width={28}
                    alt={props.alt}
                />
            </a>
        </Link>
    </div>
);

const SocialMediaItem = props => (
    <>
        {props.socialMediaItems.map(item => (
            <SocialMedia
                key={item.src}
                path={item.path}
                alt={item.alt}
                src={item.src}
            />
        ))}
    </>
);

export default SocialMediaItem;
