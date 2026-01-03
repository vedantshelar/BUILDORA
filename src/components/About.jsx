import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Heading */}
        <h2 className={styles.title}>About BUILDORA</h2>

        <p className={styles.subtitle}>
          Building digital solutions that create real value for businesses.
        </p>

        {/* Content Box */}
        <div className={styles.box} data-aos="fade-up">
          <p>
            BUILDORA is a web development agency focused on designing and building
            modern websites and web applications for businesses of all sizes. We
            help companies turn ideas into reliable, scalable digital products.
          </p>

          <p>
            We follow a clean development process, use modern technologies, and
            prioritize performance, security, and maintainability. Every project
            is built with long-term growth and real-world usage in mind.
          </p>

          <p>
            Our goal is to become a long-term technology partner by delivering
            high-quality solutions, transparent communication, and dependable
            support beyond project delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
