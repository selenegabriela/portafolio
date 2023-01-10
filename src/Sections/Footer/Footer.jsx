/* eslint-disable no-control-regex */
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import Error from "../../components/Error/Error";
import emailImage from '../../images/mail.png'
import logo from '../../images/my-portfolio2.svg'
import s from './Footer.module.css'
import Success from "../../components/Success/Success";

const Footer = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ errorFields, setErrorFields ] = useState('');
  const [ errorEmail, setErrorEmail ] = useState('');
  const [ success, setSuccess ] = useState(false);
  

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-useless-escape
    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    const fields = [name, email, message].includes('');
    const regexAccepted = !regex.test(email)

    if(fields || regexAccepted){
      if(fields){
        setErrorFields('Please, fill up all the required fields.');
        setTimeout(() => {
          setErrorFields('');
        }, 3000);
      } 
      if(regexAccepted) {
        setErrorEmail('Invalid Email.');
        setTimeout(() => {
          setErrorEmail('');
        }, 3000);
      }
      return
    }
      emailjs.sendForm('service_9tca8jm', 'template_au1soah', form.current, 'Dhza5zpZuHAMh80lM')
        .then((result) => {
              console.log(result.text);
          }, (error) => {
            console.log(error.text);
        });
    
    setTimeout(() => {
      setSuccess(false)
    }, 3000);

    setName('') 
    setEmail('') 
    setSubject('') 
    setMessage('') 
    setErrorEmail('')
    setErrorFields('')
  };

  return (
    <footer className={s.section} id='contact-me'>
        <div className={s.flexHeaderFooter}>
          <a href="#presentation">
            <img src={logo} width='100' alt="home" />
          </a>
          <h2>CONTACT ME</h2>
          <div></div>
        </div>
      <div className={s.contentFlex}>
        <div className={s.image}>
          <img src={emailImage} alt="mail" />
        </div>
        <div className={s.data}>
          <div className={s.dataNameNumberEmail}>
            <p className={s.myName}>Selene Gabriela Amador Díaz: </p>
            <p></p>
            <p className={s.phoneEmail}>WhatsApp: <span>+52 5532474093</span></p>
            <p className={s.phoneEmail}>Email: <span>sel_nn@hotmail.com</span></p>
          </div>
          <div>
            {errorFields && <Error>{errorFields}</Error>}
            {errorEmail && <Error>{errorEmail}</Error>}
            {success && <Success>Email sent successfully</Success>}
            <form onSubmit={sendEmail} ref={form}>
              <legend>Send me a Message!</legend>
              <div className={s.nameEmail}>
                <div className={s.containerNameEmail}>
                  <label className={s.label} htmlFor="name">*Full Name: </label>
                  <input
                    className={s.inputData} 
                    value={name} 
                    name='name' 
                    id='name' 
                    type="text" 
                    placeholder="Full Name"
                    onChange={e => setName(e.target.value)} 
                  />
                </div>
                <div className={s.containerNameEmail}>
                  <label className={s.label} htmlFor="email">*Email: </label>
                  <input
                    className={s.inputData} 
                    value={email} 
                    name='email' 
                    id='email' 
                    type="text" 
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}  
                  />
                </div>
              </div>
              <div>
                <label className={s.label} htmlFor="subject">Subject: </label>
                <input
                  className={s.inputData} 
                  value={subject} 
                  name='subject' 
                  id='subject' 
                  type="text" 
                  placeholder="Subject"
                  onChange={e => setSubject(e.target.value)}  
                />
              </div>
              <div>
                <label className={s.label} htmlFor="message">*Message: </label>
                <textarea
                  className={s.inputData} 
                  value={message} 
                  name='message' 
                  id='message' 
                  placeholder="Type your message..."
                  onChange={e => setMessage(e.target.value)}  
                />
              </div>

              <div className={s.containerInputSubmit}>
                <input className={s.inputSubmit} type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;