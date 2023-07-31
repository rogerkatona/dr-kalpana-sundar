// components/VideoBackground.js
const VideoBackground = () => {
    return (
        <div className="opacity-25">
            <video
                className=""
                autoPlay loop muted playsInline>
                <source src="/video/speakerReel070123.mp4" type="video/mp4" />
                {/* Add more <source> elements for other video formats if needed */}
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
