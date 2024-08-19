import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'

const page = () => {
    return (
        <main className={styles.about}>
            <section className={styles.mainImg}>
                <Image src="/aboutPage.jpg" alt="About" width={1920} height={1080} />
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
        </main>
    )
}

export default page