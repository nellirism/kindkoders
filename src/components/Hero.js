import React from "react";
import Particles from "react-particles-js";

const Hero = (props) => {
  const data = props.portfolioData;

  return (
    <section className="site-intro site-intro--with-clipmask">
      <Particles
        className="site-intro__canvas"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "left",
              speed: 0.55,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="container">
        <div className="site-intro__wrapper">
          <div className="site-intro__main">
            <div className="site-intro__intro">
              <h2 className="site-intro__name"> Hello! I am {data.name}. </h2>
              <br />
              <h2 className="site-intro__heading"> I am a {data.role} </h2>
              <h1 className="site-intro__primary"> {data.intro} </h1>
              <div className="site-intro__action">
                <a
                  className="btn btn-outline-white btn-radius btn-lg"
                  href="https://www.linkedin.com/in/arnel-mateo-medina-b22298101/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          <div className="site-intro__logo-wrapper">
            <img
              src="../public/images/elifant.jpg"
              alt=""
              className="site-intro__logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
