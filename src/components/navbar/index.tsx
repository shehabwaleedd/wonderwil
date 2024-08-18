'use client'
import React, { useState, useEffect } from 'react'
import styles from "./style.module.scss"
import Link from 'next/link';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <nav className={styles.container}>
                <div className={styles.left}>
                    <HiOutlineMenuAlt4 />
                </div>
                <div className={styles.center}>
                    <Link href="/">
                        <span>Wonderwil</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar