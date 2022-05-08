/* eslint-disable */
import { useState } from "react"
import parse from "html-react-parser"
import { Link } from "react-scroll"
import { Modal } from "react-bootstrap"

const About = ({ profile, about_more }) => {
  const [modalOpen, changeModalOpen] = useState(false) 

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-center mb-5 mb-lg-0"> 
            <img className="img-fluid shadow-md rounded d-inline-block" src={profile?.image} title={`I'm ${profile?.name}`} alt="" /> 
          </div>
          <div className="col-lg-7 text-center text-lg-start ps-lg-4">
            <h2 className="fw-600 mb-4">About Me</h2>
            <h3 className="text-6 mb-4">Hello! <span className="text-primary fw-600">I'm {profile?.name}.</span></h3>
            {parse(profile?.about)}
            <div className="brands-grid separator-border my-sm-4">
              <div className="row">
                <div className="col-sm-4 py-4 py-sm-2">
                  <div className="featured-box text-center">
                    <h4 className="text-8 text-muted mb-0"><span className="counter" data-from="0" data-to="10">{profile?.years_experience}</span>+</h4>
                    <p className="mb-0">Years Experiance</p>
                  </div>
                </div>
                <div className="col-sm-4 py-4 py-sm-2">
                  <div className="featured-box text-center">
                    <h4 className="text-8 text-muted mb-0"><span className="counter" data-from="0" data-to="350">{profile?.total_client}</span>+</h4>
                    <p className="mb-0">Happy Clients</p>
                  </div>
                </div>
                <div className="col-sm-4 py-4 py-sm-2">
                  <div className="featured-box text-center">
                    <h4 className="text-8 text-muted mb-0"><span className="counter" data-from="0" data-to="780">{profile?.total_project}</span>+</h4>
                    <p className="mb-0">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
            <a 
              className="btn btn-secondary rounded-pill mt-3" 
              role="button"
              onClick={() => changeModalOpen(true)}
            >About more</a> 
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-link smooth-scroll mt-3 px-4"
            >
              Discover My Work<span className="text-1 ms-2"><i className="fas fa-chevron-right"></i></span>
            </Link>
          </div>
        </div>
      </div>

      <Modal
        show={modalOpen}
        onHide={() => changeModalOpen(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>About Me More</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 modal-about">
          {parse(about_more?.desc)}
          <div className="featured-box style-1">
            <div className="featured-box-icon text-primary"> <i className="far fa-paper-plane"></i></div>
            <h4>Our Mission</h4>
            <p>
              {about_more?.mission}
            </p>
          </div>
          <div className="featured-box style-1">
            <div className="featured-box-icon text-primary"> <i className="far fa-eye"></i></div>
            <h4>Our Vision</h4>
            <p>
              {about_more?.vision}
            </p>
          </div>
          <div className="featured-box style-1">
            <div className="featured-box-icon text-primary"> <i className="far fa-thumbs-up"></i></div>
            <h4>Our Goal</h4>
            <p>
              {about_more?.goal}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default About
