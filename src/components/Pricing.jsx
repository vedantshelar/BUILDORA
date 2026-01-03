import React from "react";
import styles from "./Pricing.module.css";

const pricingModels = [
  {
    id: 1,
    title: "One-Time Development",
    description:
      "A fixed-scope development engagement tailored to your project requirements, from planning to deployment.",
    points: [
      "Requirement analysis",
      "UI & development",
      "Testing & deployment",
      "Clear delivery timeline",
    ],
  },
  {
    id: 2,
    title: "Hosting & Maintenance",
    description:
      "Ongoing hosting, monitoring, updates, and technical support to keep your website running smoothly.",
    points: [
      "Server & database management",
      "Security updates",
      "Performance monitoring",
      "Regular maintenance",
    ],
  },
  {
    id: 3,
    title: "Support & Upgrades",
    description:
      "Flexible support and feature upgrades as your business grows and requirements evolve.",
    points: [
      "Feature enhancements",
      "Bug fixes",
      "Technical assistance",
      "Scalability improvements",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Engagement Model</h2>
        <p className={styles.subtitle}>
          Simple, transparent, and flexible ways to work with BUILDORA
        </p>

        <div className={styles.grid}>
          {pricingModels.map((model) => (
            <div key={model.id} className={styles.card} data-aos="fade-up">
              <h3 className={styles.cardTitle}>{model.title}</h3>
              <p className={styles.cardDescription}>{model.description}</p>

              <ul className={styles.list}>
                {model.points.map((point, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.check}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
