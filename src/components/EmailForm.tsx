"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../css/Home.module.css'
// import '../css/global.css'

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_kd8s929',     // from EmailJS dashboard
        'template_ea8puh8',    // from EmailJS dashboard
        formRef.current,
        'TtYq39B0mQKtECQNs'      // from EmailJS dashboard
      )
      .then(() => {
        alert('Message sent successfully!');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        alert('Failed to send message.');
      });
  };

  return (
    <div className='fixed-row' style={{'outline': '3px red solid', 'justifyContent': 'left'} as React.CSSProperties}>
        <div className='col' style={{'--justify-col': 'start', '--col-width': '.2'} as React.CSSProperties}>
            <div className='row' style={{fontWeight: 900}}>Name:</div>
            <div className='row' style={{fontWeight: 900}}>Email:</div>
            <div className='row' style={{fontWeight: 900}}>Message:</div>
        </div>
        <div className='col' style={{'flex': '1'}}>
            <div className='row'>
                <form ref={formRef} onSubmit={sendEmail}>
                <label>
                    <div className={styles.from_name_container}>
                        <input className={styles.from_name} type='text' name="name" required />
                    </div>
                </label>
                <label>
                    <div className={styles.reply_to_container}>
                        <input className={styles.reply_to} type="email" name="email" required />
                    </div>
                </label>
                <label>
                    <div className={styles.message_container}>
                        <textarea className={styles.message} name="message" required />
                    </div>
                </label>
                <button className={styles.submit} type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;
