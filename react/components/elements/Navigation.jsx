/* eslint-disable */
import { useState } from "react"
import { Link } from "react-scroll";

const Header = ({ menu }) => {
  const [showMenu, setShowMenu] = useState(false)

  return ( 
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg">
        <div className="container position-relative h-100 flex-lg-column justify-content-lg-center px-3 p-lg-4"> 
          <a className="logo text-center d-lg-block mt-lg-3 mb-lg-4" href="index.html" title="Kenil Patel"> <img src="/assets/logo.png" alt="Kenil Patel"/> </a> 
          <hr className="d-none d-lg-block m-0 w-25" />
          <div id="header-nav" className={`collapse navbar-collapse w-100 ${showMenu && 'show'}`}>
            <ul className="navbar-nav my-lg-auto text-lg-center">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  About
                </Link>
              </li>
              {menu.service && <li className="nav-item">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Services
                </Link>
              </li>}
              {menu.why_choose && <li className="nav-item">
                <Link
                  to="why-choose"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Why Choose
                </Link>
              </li>}
              {menu.portfolio && <li className="nav-item">
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Portfolio
                </Link>
              </li>}
              {menu.work_process && <li className="nav-item">
                <Link
                  to="process"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Process
                </Link>
              </li>}
              {menu.client && <li className="nav-item">
                <Link
                  to="clients"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Clients
                </Link>
              </li>}
              <li className="nav-item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="d-none d-lg-block m-0 w-25" />
          <ul className="social-icons social-icons-sm mt-lg-4 d-none d-sm-flex">
            <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
            <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li className="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
            <li className="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/" target="_blank" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
            <li className="social-icons-github"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="GitHub"><i className="fab fa-github"></i></a></li>
          </ul>
          <button 
            className={`navbar-toggler ${showMenu ? 'show' : 'collapsed'}`} 
            type="button"
            onClick={() => {
              var nav = document.getElementById("header-nav")
              nav.style.height = "357px" 
              setTimeout(() => {
                setShowMenu(!showMenu)
              }, 100)
            }}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header