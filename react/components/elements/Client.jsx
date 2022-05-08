/* eslint-disable */
import dynamic from 'next/dynamic'
import parser from "html-react-parser"

const OwlCarouselClient = dynamic(() => import('./OwlCarouselClient'), {
  ssr: false
})

const Client = ({ testimonial, partner }) => {
  return (
  <>
    {testimonial.show && <section id="clients" className="section">
      <div className="container"> 
        
        <div className="row mb-5">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">Our Clients</h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <div className="text-4 text-muted">
              {parser(testimonial?.desc)}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <OwlCarouselClient 
              items={testimonial?.items}
            />
          </div>
        </div>
      </div>
    </section>}
    <div className="bg-light py-5">
      <div className="container">
        <div className="brands-grid separator-border">
          <div className="row align-items-center">
            {
              partner?.items.map(key => (
                <div className="col-6 col-sm-3 col-lg-2 text-center" key={key?.id}>
                  <a href={key.link}>
                    <img className="img-fluid" src={key?.logo} alt={key?.label} />
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Client