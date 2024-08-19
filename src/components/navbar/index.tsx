'use client'
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from "./style.module.scss";
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [hoverImage, setHoverImage] = useState<string | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuIconRef = useRef<HTMLButtonElement>(null);
    const dash1Ref = useRef<HTMLSpanElement>(null);
    const dash2Ref = useRef<HTMLSpanElement>(null);
    const subMenuRef = useRef<HTMLUListElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { name: 'About', subItems: [], image: '/aboutPage.jpg' },
        { name: 'Expertise', subItems: ['Brand Strategy', 'Art Direction', 'Digital Design & Development', 'Photography', 'Film'] },
        { name: 'Wonder', subItems: [], image: '/wonderPage.jpg' }
    ];

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);


    const isCurrentPage = (itemName: string) => {
        return pathname === `/${itemName.toLowerCase()}`;
    };


    useEffect(() => {
        if (dash1Ref.current && dash2Ref.current) {
            gsap.to(dash1Ref.current, {
                duration: 0.3,
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 5 : 0,
                ease: 'power2.inOut'
            });
            gsap.to(dash2Ref.current, {
                duration: 0.3,
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -5 : 0,
                ease: 'power2.inOut'
            });
        }

        if (overlayRef.current && menuRef.current) {
            gsap.to(overlayRef.current, {
                duration: 0.5,
                opacity: isOpen ? 1 : 0,
                ease: 'power3.inOut'
            });
            gsap.to(menuRef.current, {
                duration: 0.5,
                opacity: isOpen ? 1 : 0,
                ease: 'power2.inOut'
            });
        }
    }, [isOpen]);

    useEffect(() => {
        if (subMenuRef.current) {
            gsap.to(subMenuRef.current, {
                duration: 0.3,
                opacity: isSubMenuVisible ? 1 : 0,
                visibility: isSubMenuVisible ? 'visible' : 'hidden',
                ease: 'power2.inOut'
            });
        }
    }, [isSubMenuVisible]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (item: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveTab(item);
        setIsSubMenuVisible(true);
        const menuItem = menuItems.find(i => i.name === item);
        if (menuItem && menuItem.image) {
            setHoverImage(menuItem.image);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsSubMenuVisible(false);
            setActiveTab(null);
            setHoverImage(null);
        }, 1000);
    };

    const handleSubMenuEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const handleSubMenuLeave = () => {
        handleMouseLeave();
    };

    return (
        <>
            <header className={styles.navbar}>
                <nav className={styles.container}>
                    <div className={styles.left}>
                        <button onClick={toggleMenu} className={styles.menuIcon} ref={menuIconRef}>
                            <span ref={dash1Ref} className={styles.menuDash}></span>
                            <span ref={dash2Ref} className={styles.menuDash}></span>
                        </button>
                    </div>
                    <div className={styles.center}>
                        <Link href="/">
                            <span>Wonderwil</span>
                        </Link>
                    </div>
                    <div className={styles.right}></div>
                </nav>
            </header>

            <div ref={overlayRef} className={`${styles.overlay} ${isOpen ? styles.active : ''}`}>
                <nav ref={menuRef} className={styles.menu}>
                    <ul className={styles.menuItems}>
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className={`${styles.menuItem} ${isCurrentPage(item.name) ? styles.disabled : ''}`}
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {isCurrentPage(item.name) ? (
                                    <span>{item.name}</span>
                                ) : (
                                    <Link href={`/${item.name.toLowerCase()}`}>{item.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul ref={subMenuRef} className={styles.subItems} onMouseEnter={handleSubMenuEnter} onMouseLeave={handleSubMenuLeave}>
                        {activeTab && menuItems.find(item => item.name === activeTab)?.subItems.map((subItem) => (
                            <li key={subItem}>
                                <Link href={`/${activeTab.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {subItem}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {hoverImage && (
                    <div className={styles.hoverImageContainer}>
                        <Image
                            src={hoverImage}
                            alt={`${activeTab} image`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;