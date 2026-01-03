import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topGrid}>
          {/* Column 1 - Brand */}
          <div className={styles.column}>
            <h2 className={styles.logo}>BUILDORA</h2>
            <p className={styles.tagline}>
              Building modern websites & web applications for growing businesses.
            </p>
            <p className={styles.description}>
              BUILDORA is a web development agency focused on delivering reliable,
              scalable, and high-quality digital solutions.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.links}>
              <li>Website Development</li>
              <li>Web Application Development</li>
              <li>Admin Panels & Dashboards</li>
              <li>Hosting & Maintenance</li>
              <li>Database & Cloud Setup</li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.links}>
              <li> <a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className={styles.column}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.contact}>
              <li>hellobuildoraa@gmail.com</li>
              <li>+91 9321677312</li>
              <li>Mumbai, India</li>
              <li className={styles.cta}>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© 2026 BUILDORA. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <span onClick={()=>{navigate("/privacyPolicy")}}>Privacy Policy</span>
            <span onClick={()=>{navigate("/termsAndConditions")}}>Terms & Conditions</span>
            <span onClick={()=>{navigate("/cancellationAndRefund")}}>Cancellation & Refund</span>
            <span onClick={()=>{navigate("/contactUsPolicy")}}>Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
