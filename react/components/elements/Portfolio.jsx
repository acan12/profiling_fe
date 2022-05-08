import React from 'react'
import Isotope from "isotope-layout"
import parser from "html-react-parser"

import PopupPortfolio from "./Popup"

const Portfolio = ({ portfolio }) => {
  const isotope = React.useRef()
  const [key, setKey] = React.useState('*')

  React.useEffect(() => {
    isotope.current = new Isotope('.portfolio-filter', {
      layoutMode: 'fitRows',
    })

    return () => isotope.current.destroy()
  }, [])

  React.useEffect(() => {
    key === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${key}`})
  }, [key])

  const handleFilterKeyChange = key => () => setKey(key)

  return(
    <section id="portfolio" className="section">
      <div className="container"> 
        <div className="row mb-5">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">Our Best Works</h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <div className="text-4 text-muted">
              {parser(portfolio?.desc)}
            </div>
          </div>
        </div>
        
        <ul className="portfolio-menu nav nav-pills text-uppercase justify-content-center border-bottom-0 mb-5">
          <li className="nav-item" onClick={handleFilterKeyChange('*')}> <a data-filter="*" className="nav-link rounded-pill active" href="">All</a></li>
          {
            portfolio?.category.map(key => (
              <li 
                key={key.key}
                className="nav-item" 
                onClick={handleFilterKeyChange(key?.key)}
              > 
                <a data-filter={`.${key?.key}`} role="button" className="nav-link rounded-pill">{key?.label}</a>
              </li>
            ))
          }
        </ul>
        
        <div className="portfolio popup-ajax-gallery">
          <div className="row portfolio-filter g-4">
            {
              portfolio?.items.map(key => {
                return (
                  <div key={key?.id} className={`col-sm-6 col-lg-4 ${key?.category?.key}`}>
                    <PopupPortfolio 
                      portfolio={key}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio