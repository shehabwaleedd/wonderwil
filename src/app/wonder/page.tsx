'use client'
import React, { useEffect, useRef } from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomVideoPlayer from './(components)/VideoPlayer'

gsap.registerPlugin(ScrollTrigger)



const WonderPage = () => {

    const mainRef = useRef(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const colors = [
        '#46140e', // Dark brown
        '#6d2e22', // Intermediate brown 1
        '#8e4f3d', // Intermediate brown
        '#bc8a7a', // Light brown
        '#ecd8cc', // Very light brown
        '#f9f4e7'  // Cream
    ]
    useEffect(() => {
        const mainElement = mainRef.current
        const contentElement = contentRef.current

        if (!mainElement || !contentElement) return

        gsap.set(mainElement, { opacity: 0 })

        gsap.to(mainElement, {
            opacity: 1,
            duration: 1,

        })


        gsap.set(mainElement, { backgroundColor: colors[0] })

        const sections = contentElement.querySelectorAll('section')

        sections.forEach((section, index) => {
            if (index === 0) return // Skip the first section

            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom-=50%',
                    end: 'bottom top+=50%',
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = Math.min(self.progress, 0.9999) // Prevent reaching 1
                        const fromColor = colors[index - 1]
                        const toColor = colors[index]

                        const interpolatedColor = gsap.utils.interpolate(fromColor, toColor, progress)
                        gsap.set(mainElement, { backgroundColor: interpolatedColor })
                    }
                }
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])


    return (
        <main ref={mainRef} className={styles.wonder}>
            <section className={styles.mainImg}>
                <video loop muted playsInline autoPlay poster='/wonderPage.png'>
                    <source src="/WonderPage.mp4" type="video/mp4" />
                </video>
            </section>
            <div ref={contentRef} className={styles.container}>
                <section className={`${styles.centered} ${styles.topP}`}>
                    <h2 className={styles.firstH1}>Wonder With Us</h2>
                    <p>By accessing this page, you&apos;ve unveiled our most cherished project - one that embodies the true DNA of Wonderwil.</p>
                    <p>Our creative studio is not only a specialist consultant, trusted to create brand strategy, branding, content, and production for many of the most high-profile projects in the world.</p>
                    <p>We are also committed to the advocacy, development, and advancement of community-powered public spaces for social good.</p>
                    <p>And we need you to achieve this together.</p>
                </section>
                <section className={styles.farLeft}>
                    <div className={styles.img}>
                        <Image src="/assets/wonderPage/img1.png" alt="Wonder Page Image" width={1920} height={1080} />
                    </div>
                </section>
                <section className={styles.list}>
                    <h2>Sum & Substance</h2>
                    <p>Our work is guided by three core values:</p>
                    <ol>
                        <li>Cities are for people</li>
                        <li>Art matters</li>
                        <li>Human connection is at the heart of innovation</li>
                    </ol>
                    <p>We are on a quest to discover the greatest public spaces around the world, celebrating them through artful, engaging imagery.</p>

                </section>
                <section className={styles.smallImg}>
                    <Image src="/assets/wonderPage/img2.png" alt="Wonder Page Image" width={1920} height={1080} />
                </section>
                <section className={styles.leftImage}>
                    <Image src="/assets/wonderPage/img3.png" alt="Wonder Page Image" width={1920} height={1080} />
                </section>
                <div className={`${styles.list} ${styles.dynamic} ${styles.differentColor}`}>
                    <h2 style={{ color: "var(--title-color" }}>The living canvas</h2>
                    <p>Intimate, thought-provoking, visceral and poetic storytelling is the groundwork of our content ethos. A masterfully crafted visual narrative focuses on the relationship of public space to people.</p>
                    <p>Through video (a short film about the public space directed by a cinema auteur), audio (bottles of ambient sounds that act as geographical artifacts), and archival footage, we aim to illustrate the power of public spaces as platforms for community development, creating a sense of authentic human conversation among the democratic places of the world.</p>
                    <p>Supplementary visuals range from historical imagery, interactions between spaces from the past and present, and data visualization that can move us to re-dream and promote the future of our cities and environment.</p>
                </div>
                <section className={styles.bottom}>
                    <div className={styles.bottomImg}>
                        <Image src="/assets/wonderPage/img4.png" alt="Wonder Page Image" width={1920} height={1080} />
                    </div>
                </section>
                <div className={`${styles.centered} ${styles.differentColor}`}>
                    <h2 style={{ color: "var(--title-color" }}>The pulse of place</h2>
                    <p>A new paradigm of interaction for the discovery and exploration of the public realm will take shape through the development of an immersive map</p>
                    <p>The Wonder Map will serve as guiding compass, allowing us to navigate partnering public spaces and granting access to its free-standing library of vérité documentaries and a constantly refreshed selection of special features.</p>
                    <p>The Wonder Map is designed to stimulate the ongoing dialogue about the vital life force of cities, nature, beauty and history.</p>
                </div>
                <CustomVideoPlayer />
                <section className={styles.bottom2}>
                    <div className={styles.veryBottomImg}>
                        <Image src="/assets/wonderPage/img5.png" alt="Wonder Page Image" width={1920} height={1080} />
                    </div>
                </section>
                <div className={`${styles.list} ${styles.finalBottom} ${styles.differentColor}`}>
                    <h2 style={{ color: "var(--title-color)" }}>Awe-gora</h2>
                    <p>Our distribution model will include international cultural exhibitions, such as the Venice Biennale, architectural firms, art exhibitions, public installations, education centers, local institutions, and performance spaces for talks and panels.</p>
                    <p>Wonderwil is the culmination of a lifetime&apos;s vision. At the heart of our work is focus community, meaningful shared experiences, and lasting impact. Our projects will stand as beacons of hope and renewal through continual exploration and reinterpretation, bringing vitality to the arts and public spaces.</p>
                    <p>We invite you to wonder with us.</p>
                </div>
            </div>
        </main>
    )
}

export default WonderPage