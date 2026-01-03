import React from "react";
import styles from "./HowWeWork.module.css";

const steps = [
  {
    id: 1,
    title: "Requirement Discussion",
    description:
      "We understand your business goals, requirements, and challenges to ensure the solution fits your needs perfectly.",
  }, 
  {
    id: 2,
    title: "Design & Development",
    description:
      "We design clean interfaces and develop scalable, secure solutions using modern technologies and best practices.",
  },
  {
    id: 3,
    title: "Testing & Deployment",
    description:
      "We thoroughly test the product and deploy it smoothly, ensuring performance, reliability, and long-term stability.",
  },
];

const HowWeWork = () => {
  return (
    <section id="process" className={styles.howWeWork}>
      <div className={styles.container}>
        <h2 className={styles.title}>How We Work</h2>
        <p className={styles.subtitle}>
          A simple, transparent process focused on quality and results
        </p>

        <div className={styles.stepsWrapper}>
          <div className={styles.connector} />

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.id} className={styles.card} data-aos="flip-up">
                <div className={styles.stepCircle}>{step.id}</div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
