import React from "react";
import "./contact.scss";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Replace with your email address
        const emailAddress = 'thakormanthan849@gmail.com';
        
        // Extract form values
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
    
        // Construct the email body
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
        // Open the mail client with the pre-filled email
        window.location.href = mailtoLink;
      };
    
  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="heading-contact">
          <h1>Contact Us</h1>
          <h2>
            <span className="dot"></span>
            <span className="dot"></span>QUICK CONTACT
            <span className="dot"></span>
            <span className="dot"></span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            repellat dignissimos sit dolore dolor vero, assumenda ut suscipit,
            explicabo perferendis molestiae impedit! Reprehenderit ipsam
            cupiditate dolore repudiandae praesentium alias commodi?
          </p>
        </div>

        <div className="contact-us-part">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Address</h2>
                  <span>Building Number 10, Kalita Street, 36 Sukriti Society, </span>
                  <span>TanujaGunj, Noida, Sikkim, 334273.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="contact-info ">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span> MrStore@gmail.com</span>
                  <span> MrStore2@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Office Time</h2>
                  <span>Mon - Thu 9:00 am - 4:00 pm</span>
                  <span>Thu - Mon 10:00 pm - 5:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          
      <section className="contact-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form">
                <div className="sec-title-style1 float-left">
                  <div className="title">Send Your Message</div>
                  <div className="text">
                    <div className="decor-left"><span></span></div>
                
                  </div>
                </div>
               
                <div className="inner-box">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="input-box">
                          <input type="text" name="phone" placeholder="Phone" />
                        </div>
                        <div className="input-box">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input type="text" name="subject" placeholder="Subject" />
                        </div>
                        <div className="input-box">
                          <textarea name="message" placeholder="Your Message..." required></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="button-box">
                      <input type="submit" value="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



          
          <div className="map-sec">
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234826.6676585051!2d72.63819501555868!3d21.1593458203279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2652e558d3%3A0xb5ed0c423abb1a28!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1688395724005!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
