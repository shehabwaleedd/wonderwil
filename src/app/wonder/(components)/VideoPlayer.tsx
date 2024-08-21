import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

const CustomVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(e => console.error("Play failed:", e));
            } else {
                videoRef.current.pause();
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className={styles.videoContainer}>
            <video
                ref={videoRef}
                loop
                playsInline
                className={styles.video}
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.controls}>
                <button onClick={togglePlay} aria-label="Play/Pause">
                    <Image
                        src="/assets/wonderPage/pause_hires.png"
                        alt="Play/Pause"
                        width={24}
                        height={24}
                    />
                </button>
                <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                    <Image
                        src={isMuted ? "/assets/wonderPage/mute_hires.png" : "/assets/wonderPage/medium-volume_hires.png"}
                        alt={isMuted ? "Unmute" : "Mute"}
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;