import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Building Modern Websites <br /> & Web Applications
                </h1>


                <p className={styles.subtitle}>
                    At <strong>BUILDORA</strong>, we design and develop fast, scalable, and secure
                    digital solutions tailored for growing businesses.
                </p>


                <div className={styles.actions}>
                    <a href="#services"><button className={styles.primaryBtn}>Our Services</button></a>
                    <a href="#contact"><button className={styles.secondaryBtn}>Contact Us</button></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
