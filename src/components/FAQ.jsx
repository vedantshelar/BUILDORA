import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What services does BUILDORA offer?",
    answer:
      "BUILDORA provides end-to-end web solutions including website development, web application development, admin panels and dashboards, payment gateway integration, database and cloud setup, and hosting and maintenance services.",
  },
  {
    question: "How long does it take to build a website or web application?",
    answer:
      "Project timelines depend on the scope and requirements. A standard website usually takes a few weeks, while web applications may take longer based on features and complexity.",
  },
  {
    question: "Do you provide hosting and maintenance after project delivery?",
    answer:
      "Yes. We offer reliable hosting setup and ongoing maintenance to ensure your website or application remains secure, fast, and up to date after launch.",
  },
  {
    question: "Do you build projects from scratch?",
    answer:
      "Yes. We focus on building websites and web applications from the ground up, ensuring clean architecture, modern design, and scalable code tailored to your business needs.",
  },
  {
    question: "How do we get started with BUILDORA?",
    answer:
      "You can get started by contacting us through this website. Simply share your details and message, and we’ll get back to you to discuss the next steps.",
  },
];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Answers to common questions about working with BUILDORA
        </p>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
