import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We design and develop modern, responsive websites that represent your brand and deliver a seamless user experience.",
    points: [
      "SEO-friendly and performance optimized",
      "Responsive across all devices",
      "Clean UI with modern design principles",
      "Secure and maintainable codebase",
    ],
  },
  {
    id: 2,
    title: "Web Application Development",
    description:
      "End-to-end development of scalable and secure web applications tailored to your business workflows.",
    points: [
      "Custom business logic and workflows",
      "Admin panels and dashboards included",
      "Secure authentication and authorization",
      "Scalable backend and API architecture",
    ],
  },
  {
    id: 3,
    title: "Admin Panels & Dashboards",
    description:
      "Custom-built admin panels and dashboards to manage users, data, and operations efficiently.",
    points: [
      "User and role management",
      "Data visualization and insights",
      "Easy-to-use and intuitive interface",
      "Built for performance and scalability",
    ],
  },
  {
    id: 4,
    title: "Payment Gateway Integration",
    description:
      "Secure and seamless payment gateway integration to help you accept online payments with confidence.",
    points: [
      "UPI, cards, and wallet integration",
      "Secure payment flow and validation",
      "Smooth checkout experience",
      "Compliance with best security practices",
    ],
  },
  {
    id: 5,
    title: "Database & Cloud Setup",
    description:
      "Reliable database and cloud infrastructure setup to support performance, scalability, and long-term growth.",
    points: [
      "Structured and optimized databases",
      "Cloud deployment and configuration",
      "Scalable infrastructure planning",
      "Data security and backup strategies",
    ],
  },
  {
    id: 6,
    title: "Hosting & Maintenance",
    description:
      "Ongoing hosting and maintenance services to keep your website or application fast, secure, and up to date.",
    points: [
      "Server monitoring and uptime management",
      "Security updates and bug fixes",
      "Performance optimization",
      "Reliable long-term technical support",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          End-to-end web solutions tailored to your business
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card} data-aos="fade-up">
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>
                {service.description}
              </p>

              <ul className={styles.list}>
                {service.points.map((point, index) => (
                  <li key={index} className={styles.listItem}>
                    <span className={styles.check}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              {/* <button className={styles.button}>
                Learn More →
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
