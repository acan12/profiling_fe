/* eslint-disable */
import OwlCarousel from "react-owl-carousel"

const OwlCarouselComponent = ({ images }) => {
  return (
    <OwlCarousel className="owl-carousel owl-theme single-slideshow" loop autoPlay={true} items={1} dots={true}>
      {
        images.map((key, index) => (
          <div className="item" key={index}> 
            <img className="img-fluid" alt="" src={key} /> 
          </div>
        ))
      }
    </OwlCarousel>
  )
}

export default OwlCarouselComponent
