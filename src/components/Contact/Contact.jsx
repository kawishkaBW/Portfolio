import React, { useRef ,useState} from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rmuxqoj', 'template_xsvuxl3', form.current, 'tRIxWnWtSa1nT-Q-w')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true);
          alert('Message sent successfully!');
          form.current.reset();

        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSuccess(false);
          alert('Message sent faield!')
        },
      );
  };

  return (
    <section id="section-wrapper">
      <div className="box-wrapper" id='contact'>
        <div className="info-wrap">
          <h2 className="info-title">Contact Information</h2>
          <ul className="info-details">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>Phone:</span> <a href="tel:+1235235598">+94 779 885 779</a>
            </li>
            <li>
              <i className="fas fa-paper-plane"></i>
              <span>Email:</span> <a href="mailto:kavishkabwimalarathna@gmail.com">kavishkabwimalarathna@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-globe"></i>
              <span>Website:</span> <a href="https://youtube.com">Mysite.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="form-wrap">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="form-title">GET IN TOUCH</h2>
            <div className="form-fields">
              <div className="form-group">
                <input type="text" name="first_name" className="fname" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" name="last_name" className="lname" placeholder="Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Write your message" required></textarea>
              </div>
            </div>
            <input type="submit" value="Send Message" className="submit-button" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
