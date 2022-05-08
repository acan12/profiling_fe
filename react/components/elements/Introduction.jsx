/* eslint-disable */
import React from "react"
import Typed from 'react-typed'
import { Link } from "react-scroll"

import Particle from './Particle'

const Introduction = ({ profile }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <Particle />
        <div className="hero-mask opacity-7 bg-dark"></div>
        <div className="hero-bg parallax" style={{
          backgroundImage:`url('/assets/intro-bg-3.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 0px",
          zIndex: 2,
          opacity: 0.2,
        }} />
        <div className="hero-content section d-flex fullscreen">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-5 text-uppercase text-white ls-4 mb-2 mb-md-3">Welcome to My World</p>
                <h2 className="text-17 fw-600 text-white mb-2 mb-md-3">
                  I'am {` `}
                  <Typed
                    strings={profile?.job}
                    typeSpeed={40}
                    stopped={false}
                    loop
                  />
                </h2>
                <p className="text-5 text-light">based in {profile?.domicili}.</p>
                <a href="#" className="btn btn-primary rounded-pill mt-3">Download CV</a>
              </div>
            </div>
          </div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated"><i className="fa fa-chevron-down"></i></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Introduction