import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import {  toast,Bounce ,ToastContainer  } from 'react-toastify';
import { useTheme } from '../../common/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const form = useRef();
  const [isSubmit,setIsSubmit]=useState(false)
  const { theme } = useTheme();
  const sendEmail = (e) => {
    setIsSubmit(true)
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('you sent message to Amul Kumar', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme==="light"?"dark":"light",
            transition: Bounce,
            });
            setIsSubmit(false)
        },
        (error) => {
          toast.error(`${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme==="light"?"dark":"light",
            transition: Bounce,
            });
            setIsSubmit(false)
        },
      );
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <button type="submit" className='submit-btn-contact' disabled={isSubmit}>Submit</button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Contact;
