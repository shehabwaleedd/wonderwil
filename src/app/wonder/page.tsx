'use client'
import React, { useEffect, useRef } from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



const WonderPage = () => {

    const mainRef = useRef(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const colors = ['#46140e', '#bca287', '#f9f4e7']

    useEffect(() => {
        const mainElement = mainRef.current
        const contentElement = contentRef.current

        if (!mainElement || !contentElement) return

        gsap.set(mainElement, {opacity: 0})

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
            <div ref={contentRef}>
                <section className={styles.left}>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                    <div className={styles.img}>
                        <Image src="/assets/wonderPage/img1.png" alt="About" width={1920} height={1080} />
                    </div>
                    <div className={styles.rightPP}>
                        <p className={styles.rightP}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                    </div>
                </section>
                <section className={styles.lower}>
                    <div className={styles.smallImg}>
                        <Image src="/assets/wonderPage/img2.png" alt="About" width={1920} height={1080} />
                    </div>
                    <div className={styles.leftImage}>
                        <Image src="/assets/wonderPage/img3.png" alt="About" width={1920} height={1080} />
                    </div>
                    <div className={styles.lowerRight}>
                        <h2 > Lorem ipsum dolor sit amet.</h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                    </div>
                </section>
                <section className={styles.bottom}>
                    <div className={styles.bottomImg}>
                        <Image src="/assets/wonderPage/img4.png" alt="About" width={1920} height={1080} />
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                    <div className={styles.videoImg}>
                        <Image src="/assets/wonderPage/videoScreenshot.png" alt="About" width={1920} height={1080} />
                    </div>
                </section>
                <section className={styles.bottom2}>
                    <div className={styles.veryBottomImg}>
                        <Image src="/assets/wonderPage/img5.png" alt="About" width={1920} height={1080} />
                    </div>
                    <p className={styles.bottomP} style={{ color: "var(--title-color)" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora eligendi magnam architecto! Ad numquam nemo dolores veritatis, illo repellendus voluptas iste aspernatur! Asperiores quas corporis, ipsa minima amet illo deserunt nam explicabo placeat sed, officiis totam possimus eius doloribus labore modi perferendis. Tenetur fugiat dolores iste sapiente aut adipisci voluptatibus consequuntur numquam quisquam temporibus.</p>
                </section>
            </div>
        </main>
    )
}

export default WonderPage