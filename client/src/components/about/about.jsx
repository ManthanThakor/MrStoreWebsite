import React from "react";
import "./about.scss";
import teamImage from '../../assets/team/aa41b583e3301c734b31474daa590d3c.jpg';
import teamImage2 from '../../assets/team/images1.jpg';
import teamImage3 from '../../assets/team/images.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="main-title-about">
        <div className="about-header">
          <h2>About Us</h2>
        </div>
        <div className="about-content">
          <p>
            Welcome to our e-commerce platform, your one-stop shop for all your
            needs. We are dedicated to providing you with the best products and
            services, focusing on quality, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2024, our company has come a long way from its
            beginnings. When we first started out, our passion for Your Passion
            drove us to start our own business.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
        </div>
      </div>
      <div className="team-sec">
        <section>
          <span className="big-t">meet our</span>
          <h2 className="sm-t">Team</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            praesentium veritatis voluptatibus ut consequuntur quas consequatur
            omnis id rem obcaecati.
          </p>

          <div className="cards">
            <div className="card">
              <img
                src={teamImage}
                alt="Franklin Carlson"
              />
              <div className="card-content">
                <h3>Franklin Carlson</h3>
                <p>UX Designer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img
                src={teamImage2}
                alt="Antonia Moore"
              />
              <div className="card-content">
                <h3>Antonia Moore</h3>
                <p>Product Designer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img
                src={teamImage3}
                alt="Travis Lynch"
              />
              <div className="card-content">
                <h3>Travis Lynch</h3>
                <p>Web Developer</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
