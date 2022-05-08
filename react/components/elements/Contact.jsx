const Contact = ({ profile }) => {
  return (
    <section id="contact" className="section">
      <div className="container"> 
        <div className="row mb-5">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">Contact Us</h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <p className="text-4 text-muted">Send me a note, and let’s get started on your project today!</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <form id="contact-form" action="php/mail.php" method="post">
              <div className="row g-4">
                <div className="col-md-6">
                   <input name="name" type="text" className="form-control border-2" required placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                   <input name="email" type="email" className="form-control border-2" required placeholder="Your Email" />
                </div>
				<div className="col-md-12">
				   <textarea name="form-message" className="form-control border-2" rows="5" required placeholder="Tell us more about your needs........"></textarea>
				</div>
				<div className="col-md-12 text-center">
				   <button id="submit-btn" className="btn btn-primary rounded-pill d-inline-flex" type="submit">Send Message</button>
				</div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="brands-grid separator-border h-100 mt-5">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="featured-box text-center my-3 my-md-0">
                <div className="featured-box-icon text-light"> <i className="fas fa-map-marker-alt"></i></div>
                <h3 className="text-uppercase">Visit Us</h3>
                <p className="text-muted mb-0">
                  {profile?.address}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="featured-box text-center my-3 my-md-0">
                <div className="featured-box-icon text-light"> <i className="fas fa-phone-alt"></i> </div>
                <h3 className="text-uppercase">Call Us Now</h3>
                <p className="text-muted mb-0">Phone: {profile?.phone}<br />
                  Fax: (+060) 8898880088</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="featured-box text-center my-3 my-md-0">
                <div className="featured-box-icon text-light"> <i className="fas fa-envelope"></i> </div>
                <h3 className="text-uppercase">Inquiries</h3>
                <p className="text-muted mb-0"><a href={`mailto:${profile?.email}`}>{profile?.email}</a><br />
                  {profile?.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact