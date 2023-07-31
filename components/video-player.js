import ModalVideo from "./modal-video";
import useModal from "../lib/useModal";

export default function VideoPlayer() {
    const {isShowing, toggle} = useModal();
    return (
        <>
            <section>
                <div>
                    <a href=''>
                        <button
                            onClick={toggle}
                            className="hover:bg-hoverLink text-white  text-2xl uppercase hover:text-gray-50 p-4 bg-link hover:border-white "
                        >
                            See Video
                        </button>
                    </a>
                </div>
            </section>
            <section>
                <ModalVideo
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </>
    )
}

