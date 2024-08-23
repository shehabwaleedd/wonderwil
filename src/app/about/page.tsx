'use client'
import React, { useEffect, useRef } from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const AboutPage = () => {

    const mainRef = useRef(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const colors = ['#042066', '#609496']


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

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentElement,
                start: 'top bottom-=50%',
                end: 'bottom top+=50%',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = Math.min(self.progress, 0.9999) // Prevent reaching 1
                    const totalSteps = colors.length - 1
                    const step = progress * totalSteps
                    const colorIndex = Math.floor(step)
                    const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1)

                    const fromColor = colors[colorIndex]
                    const toColor = colors[nextColorIndex]

                    const colorProgress = step - colorIndex
                    const interpolatedColor = gsap.utils.interpolate(fromColor, toColor, colorProgress)
                    gsap.set(mainElement, { backgroundColor: interpolatedColor })
                }
            }
        })

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])


    return (
        <main ref={mainRef} className={styles.about}>
            <section className={styles.mainImg}>
                <video loop muted playsInline autoPlay >
                    <source src="/AboutPage.mp4" type="video/mp4" />
                </video>
            </section>
            <div ref={contentRef} className={styles.container}>
                <div className={`${styles.centered} ${styles.topP}`}>
                    <h2> Integrity, Grit & Imagination </h2>
                    <p> We are a global creative studio dedicated to the realm of architecture, partnering with visionary businesses, funds, and developers to shape the future through our relentless pursuit of excellence. </p>
                    <p> Our consultancy delivers bespoke solutions covering brand strategy, content, and production for a diverse array of architectural and design firms. We&apos;ve cultivated a unique culture comprising influential auteurs from the worlds of film and photography. </p>
                    <p> We believe our work must have a positive and lasting legacy, transforming brands, communities, and the world around us. Together, we reimagine the established, explore the uncharted, and forge authentic, enduring bonds.</p>
                </div>
                <section className={styles.upper}>
                    <Image src="/assets/aboutPage/img1.png" alt="About" width={1920} height={1080} />
                </section>
                <section className={styles.lower}>
                    <Image src="/assets/aboutPage/img2.png" alt="About" width={1920} height={1080} />
                </section>
                <div className={`${styles.list} ${styles.finalBottom}`}>
                    <p>We prioritize clarity of message and cost certainty in content creation, delivering measurable results with a passion for detail and authenticity. Our commitment to inclusivity, equity, and sustainability underpins everything we do.</p>
                    <p>Through our work, we create a future where seventh art, literature, music, and architecture converge to make a meaningful impact, leaving a legacy that resonates for generations to come.</p>
                </div>
            </div>
        </main>
    )
}

export default AboutPage