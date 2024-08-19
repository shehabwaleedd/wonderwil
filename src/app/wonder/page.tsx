import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'


const page = () => {
    return (
        <main className={styles.wonder}>
            <section className={styles.mainImg}>
                <Image src="/wonderPage.jpg" alt="About" width={1920} height={1080} />
            </section>
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
        </main>
    )
}

export default page