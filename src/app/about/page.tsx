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

        gsap.set(mainElement, { backgroundColor: colors[0] })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentElement,
                start: 'top top',
                end: 'bottom bottom',
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
            <div ref={contentRef}>
                <section className={styles.mainImg}>
                    <video loop muted playsInline autoPlay poster='/aboutPage.png'>
                        <source src="/AboutPage.mp4" type="video/mp4" />
                    </video>
                </section>
                <section className={styles.upper}>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                    <div className={styles.rightImg}>
                        <Image src="/assets/aboutPage/img1.png" alt="About" width={1920} height={1080} />
                    </div>
                </section>
                <section className={styles.lower}>
                    <div className={styles.leftImg}>
                        <Image src="/assets/aboutPage/img2.png" alt="About" width={1920} height={1080} />
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                </section>
            </div>
        </main>
    )
}

export default AboutPage