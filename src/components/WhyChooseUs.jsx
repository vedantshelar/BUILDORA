import React from "react";
import styles from "./WhyChooseUs.module.css";

const features = [
  {
    id: 1,
    title: "Clean & Scalable Code",
    description:
      "We write maintainable, future-ready code that grows with your business.",
  },
  {
    id: 2,
    title: "Secure & Reliable Solutions",
    description:
      "Security best practices and stable architecture are built into every project.",
  },
  {
    id: 3,
    title: "Transparent Communication",
    description:
      "Clear updates, honest timelines, and open collaboration throughout the project.",
  },
  {
    id: 4,
    title: "Modern Tech Stack",
    description:
      "We use proven, modern technologies to ensure performance and scalability.",
  },
  {
    id: 5,
    title: "Long-Term Support",
    description:
      "Ongoing support, improvements, and maintenance beyond project delivery.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose BUILDORA</h2>
        <p className={styles.subtitle}>
          What makes us a reliable partner for your digital projects
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card} data-aos="fade-up">
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
