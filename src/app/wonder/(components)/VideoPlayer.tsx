import React, { useRef, useState } from 'react';
import styles from './style.module.scss';
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import { LiaPauseSolid } from "react-icons/lia";
import { SlControlPlay } from "react-icons/sl";

const CustomVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(e => console.error("Play failed:", e));
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
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
            <video ref={videoRef} loop playsInline className={styles.video} autoPlay muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.controls}>
                <button onClick={togglePlay} aria-label="Play/Pause">
                    {isPlaying ? (
                        <LiaPauseSolid size={24} />
                    ) : (
                        <SlControlPlay size={24} />
                    )}
                </button>
                <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                    {isMuted ? (
                        <SlVolumeOff size={24} />
                    ) : (
                        <SlVolume2 size={24} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;