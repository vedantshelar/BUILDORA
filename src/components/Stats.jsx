import React from "react";
import styles from "./Stats.module.css";

const stats = [
  {
    id: 1,
    value: "5+",
    label: "Projects Completed",
  },
  {
    id: 2,
    value: "1.5+",
    label: "Years of Development Experience",
  },
  {
    id: 3,
    value: "24/7",
    label: "Support Availability"
  },
  {
    id: 4,
    value: "100%",
    label: "Commitment to Quality",
  },
];

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Impact in Numbers</h2>
        <p className={styles.subtitle}>
          A snapshot of the work we’ve delivered and the trust we’ve built
        </p>

        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.card}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
