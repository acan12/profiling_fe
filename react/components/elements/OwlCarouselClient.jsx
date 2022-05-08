/* eslint-disable */
import OwlCarousel from "react-owl-carousel"

const OwlCarouselClient = ({ items }) => {
  return (  
    <OwlCarousel 
      className="owl-carousel owl-theme single-slideshow" 
      autoPlay={true} 
      nav 
      margin={30} 
      slideBy={1} 
      stagePadding={5} 
      items={1} 
      dots={true}
    >
      {
        items?.map(key => (
          <div className="item text-center px-5" key={key?.id}> 
            <span className="text-9 text-muted opacity-3">
            <i className="fa fa-quote-left"></i></span>
            <p className="text-4">{key?.desc}”</p>
            <img className="img-fluid d-inline-block w-auto rounded-circle shadow-sm border" src={key?.image} alt="" /> 
            <strong className="d-block fw-500">{key?.name}</strong> 
            <span className="text-muted text-2">{key?.title_job}</span> 
          </div>
        ))
      }
    </OwlCarousel>
  )
}

export default OwlCarouselClient