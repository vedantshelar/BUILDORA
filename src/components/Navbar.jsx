import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <img
                        src="/logo.png"
                        alt="BUILDORA Logo"
                        className={styles.logoImg}
                    />
                </div>


                {/* Desktop Menu */}
                <nav className={styles.navLinks}>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#process">Process</a>
                    <a href="#contact">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.menuBtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            {menuOpen && (
                <div className={styles.mobileOverlay}>
                    <div className={styles.mobileHeader}>
                        <div className={styles.mobileLogo}>
                            <img
                                src="/logo.png"
                                alt="BUILDORA Logo"
                                className={styles.mobileLogoImg}
                            />
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    <nav className={styles.mobileNavLinks}>
                        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                        <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </nav>
                </div>
            )}

        </header>
    );
};

export default Navbar;
