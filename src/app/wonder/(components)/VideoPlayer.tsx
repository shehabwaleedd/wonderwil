import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

const CustomVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(e => console.error("Play failed:", e));
            } else {
                videoRef.current.pause();
            }
        }
    };

    const decreaseVolume = () => {
        if (videoRef.current && videoRef.current.volume > 0) {
            videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1);
        }
    };

    const increaseVolume = () => {
        if (videoRef.current && videoRef.current.volume < 1) {
            videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1);
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
                <button onClick={decreaseVolume} aria-label="Decrease Volume">
                    <Image 
                        src="/assets/wonderPage/mute_hires.png"
                        alt="Decrease Volume" 
                        width={24} 
                        height={24}
                    />
                </button>
                <button onClick={togglePlay} aria-label="Play/Pause">
                    <Image 
                        src="/assets/wonderPage/pause_hires.png"
                        alt="Play/Pause" 
                        width={24} 
                        height={24}
                    />
                </button>
                <button onClick={increaseVolume} aria-label="Increase Volume">
                    <Image 
                        src="/assets/wonderPage/medium-volume_hires.png"
                        alt="Increase Volume" 
                        width={24} 
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;