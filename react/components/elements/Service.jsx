/* eslint-disable */
import parse from "html-react-parser"

const Service = ({ service }) => {
  return (
    <section id="services" className="section bg-light">
      <div className="container"> 
        <div className="row mb-4">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">Our Services</h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <div className="text-4 text-muted">
              {parse(service?.desc)}
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {
            service?.items.map(key => (
              <div key={key.id} className="col-sm-6 col-lg-4">
                <div className="featured-box bg-white text-center rounded shadow-sm py-5 px-4">
                  <div className="featured-box-icon text-primary mt-2"> <i className="fas fa-palette"></i> </div>
                  <h3 className="mb-3">{key?.label}</h3>
                  <p className="text-muted mb-0">
                    {key?.desc}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Service