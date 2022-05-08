/* eslint-disable */
import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import { Popup } from '@sekmet/react-magnific-popup';

const OwlCarousel = dynamic(() => import('./OwlCarouselPortfolio'), {
  ssr: false
})

const PopupPortfolio = ({
  portfolio,
}) => {
  const formConfig = {
    type: 'inline',
    gallery: {
      enabled: true,
    },
    mainClass: 'mfp-fade',
    preloader: false,

  };

  if (!portfolio) {
    return false
  }

  const image = portfolio?.images[0]

  return (
    <div>
      <Popup 
        className="popup-with-form" 
        href={`#pop-${portfolio.id}`}
        config={formConfig}
      >
        <div className="portfolio-box rounded">
          <div className="portfolio-img rounded"> <img className="img-fluid d-block" src={image} alt="" />
            <div className="portfolio-overlay"> 
              
              <a className="popup-ajax stretched-link" href=""></a>
              <div className="portfolio-overlay-details">
                <p className="text-white text-6"><i className="fas fa-plus"></i></p>
                <h5 className="text-white fw-400">{portfolio?.title}</h5>
                <span className="text-light">{portfolio?.category?.label}</span> 
              </div>
            </div>
          </div>
        </div>
      </Popup>
      <div id={`pop-${portfolio.id}`} className="white-popup-block mfp-hide">
        <div className="container ajax-container">
          <h2 className="text-6 fw-600 text-center mb-4">{portfolio?.title}</h2>
          <div className="row g-4">
            <div className="col-sm-7">
              <OwlCarousel 
                images={portfolio?.images}
              />
            </div>
            <div className="col-sm-5">
              <h4 className="text-4 fw-600">Project Info:</h4>
              <p>{portfolio?.desc}</p>
              <h4 className="text-4 fw-600 mt-4">Project Details:</h4>
              <ul className="list-style-2">
                <li className=""><span className="text-dark fw-600 me-2">Client:</span>{portfolio?.client}</li>
                <li className=""><span className="text-dark fw-600 me-2">Industry:</span>{portfolio?.industry}</li>
                <li className=""><span className="text-dark fw-600 me-2">Technologies:</span>{portfolio?.technologies}</li>
                <li className=""><span className="text-dark fw-600 me-2">Date:</span>{portfolio?.date}</li>
                <li className=""><span className="text-dark fw-600 me-2">URL:</span><a href={portfolio?.url} target="_blank">{portfolio?.url}</a></li>
              </ul>
              <div className="row g-2 align-items-center">
                <div className="col-auto text-dark fw-600">Share: </div>
                <div className="col-auto">
                  <ul className="social-icons">
                    <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li className="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                    <li className="social-icons-instagram"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                    <li className="social-icons-email"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Email"><i className="fas fa-envelope"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PopupPortfolio