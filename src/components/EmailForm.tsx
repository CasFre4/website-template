"use client"
import React, { useRef } from 'react';
import styles from '../css/Home.module.css'
// import '../css/global.css'

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    let endpoint: string
    if (process.env.NODE_ENV === 'production') {
      endpoint = '/api/send-email'
    } else {
      endpoint = 'http://localhost:8787'
    }
    try {
      const response = await fetch( endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })
      const result = await response.json()
      if (result.success) {
      // Handle success
      console.log('Email sent successfully!');
      } else {
        // Handle error
        console.error('Failed to send email');
      }
    } catch (error) {
    console.error('Error:', error);
    }
  }
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
