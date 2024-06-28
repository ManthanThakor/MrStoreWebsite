import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <p>
          Welcome to our e-commerce platform, your one-stop shop for all your needs. We are dedicated to providing you with the best products and services, focusing on quality, customer service, and uniqueness.
        </p>
        <p>
          Founded in 2024, our company has come a long way from its beginnings. When we first started out, our passion for Your Passion drove us to start our own business.
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
      <section>
        <span>meet our</span>
        <h2>Team</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, praesentium veritatis voluptatibus ut consequuntur quas consequatur omnis id rem obcaecati.</p>
        <span className="bg-watermark">team</span>
        <div className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Franklin Carlson" />
            <div className="card-content">
              <h3>Franklin Carlson</h3>
              <p>UX Designer</p>
              <ul>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Antonia Moore" />
            <div className="card-content">
              <h3>Antonia Moore</h3>
              <p>Product Designer</p>
              <ul>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Travis Lynch" />
            <div className="card-content">
              <h3>Travis Lynch</h3>
              <p>Web Developer</p>
              <ul>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
