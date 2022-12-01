import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import Error from "../../components/Error/Error";

const Footer = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ error, setError ] = useState({});

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    if([name, email, message].includes('')){
      console.log(error)
      return setError({...error,
        allFields: 'Please, fill up all the required fields.'
      });
    }

    emailjs.sendForm('service_9tca8jm', 'template_au1soah', form.current, 'Dhza5zpZuHAMh80lM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <footer>
      <div>
        <h2>CONTÁCTAME</h2>
      </div>
      <div>
        <div>
          <p>“If opportunity doesn’t knock, build a door.”</p>
          <p>– Milton Berle</p>
        </div>
        <div>
          <div>
            <p>Redes</p>
          </div>
          <div>
            {error.allFields && <Error>{error.allFields}</Error>}
            <form onSubmit={sendEmail} ref={form}>
              <legend>Send me an Email!</legend>
              <div>
                <label htmlFor="name">Full Name: </label>
                <input name='name' id='name' type="text" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input name='email' id='email' type="text" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="subject">Subject: </label>
                <input name='subject' id='subject' type="text" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message">Message: </label>
                <input name='message' id='message' type="textarea" placeholder="Type your message..." />
              </div>

              <div>
                <input type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;