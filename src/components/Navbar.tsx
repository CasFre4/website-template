"use client"
import React, {useState} from 'react'
import styles from'../css/Navbar.module.css'
import Link from 'next/link'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <div className={styles.navLink}>
                         <Link href='/' onClick={() => setIsOpen(false)}>Omar</Link>
                    </div>
                </div>
                {!isOpen && (
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        ☰
                    </div>
                )}
                <div className={`${styles.navbarDropdown} ${isOpen ? styles.active : ''}`}>
                    <div className={styles.navbarCenter}>
                        <ul className={styles.navLinks}>
                            <li>
                                <Link href='/' onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link href='/projects' onClick={() => setIsOpen(false)}>Projects</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navbarRight}>
                        <div className={styles.navLink}>
                            <Link href='/contact-me' onClick={() => setIsOpen(false)}> Contact Me </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar