import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from'../css/Navbar.module.css'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <>
            <nav className={styles.navbar}>
                {/* <div className={styles.navbarLeft}>
                    <img src="/logo/imwatching.jpg" alt="Logo" id='navbar-logo'></img>
                    <h1>Me</h1>
                </div> */}
                {!isOpen && (
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        ☰
                    </div>
                )}
                <div className={`${styles.navbarDropdown} ${isOpen ? styles.active : ''}`}>
                    <div className={styles.navbarCenter}>
                        <ul className={styles.navLinks}>
                            <li>
                                <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to='/Projects' onClick={() => setIsOpen(false)}>Projects</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className={styles.navbarRight}>
                        <div className = {styles.profilePicture}>
                            <img src="/logo/imwatching.jpg"></img>
                        </div>
                    </div> */}
                </div>
            </nav>
        </>
    )
}
export default Navbar