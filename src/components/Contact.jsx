import React, { useState } from "react";
import styles from "./Contact.module.css";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconBrandInstagram,
} from "@tabler/icons-react";

const Contact = () => {

  let [formData,setFormData] = useState({name:"",email:"",message:""});
  let [isLoading,setIsLoading] = useState(false);

  function handleInput(e){
    let key = e.target.name;
    let value = e.target.value;
    setFormData((currFormData)=>{
      return {...currFormData,[key]:value};
    })
  }

  const handleSubmit = async (e) => {
    if(formData.name=="" || formData.email=="" || formData.message==""){
      alert("Please Fill Complete Contact Form.");
    }else{
      const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;
      e.preventDefault();
      setIsLoading(true);
    
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
  
      setIsLoading(false);
  
      setFormData({name:"",email:"",message:""});
    }
  };
  

  
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* LEFT COLUMN */}
        <div className={styles.infoCard}>
          <h2 className={styles.heading}>Get In Touch</h2>
          <p className={styles.subtext}>
            Feel free to reach out for collaborations, opportunities, or project
            discussions.
          </p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>
                <IconMail size={18} stroke={1.6} />
              </span>
              <div>
                <p className={styles.label}>Email</p>
                <p className={styles.value}>hellobuildoraa@gmail.com</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.icon}>
                <IconPhone size={18} stroke={1.6} />
              </span>
              <div>
                <p className={styles.label}>Phone / WhatsApp</p>
                <p className={styles.value}>+91 9321677312</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.icon}>
                <IconMapPin size={18} stroke={1.6} />
              </span>
              <div>
                <p className={styles.label}>Location</p>
                <p className={styles.value}>Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/build_oraa/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
             <IconBrandInstagram size={18} stroke={1.6} />
            </a>

            <a
              href="https://www.linkedin.com/in/vedant-shelar"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={18} stroke={1.6} />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Send a Message</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required onChange={handleInput} value={formData.name}/>
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} required onChange={handleInput}/>
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your project..."
                required  onChange={handleInput} value={formData.message}
              />
            </div>

            <button type="submit" className={styles.button}>
              {isLoading ? "Sending...":"Send Message"}
              <IconSend size={16} stroke={1.6} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
