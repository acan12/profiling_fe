/* eslint-disable */
const Footer = () => {
  return (
    <footer id="footer" className="section bg-light footer-text-light">
      <div className="container">
        <ul className="social-icons social-icons-lg social-icons-muted justify-content-center mb-3">
          <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/harnishdesign/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
          <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/harnishdesign/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li className="social-icons-linkedin"><a data-bs-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
          <li className="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
          <li className="social-icons-github"><a data-bs-toggle="tooltip" href="http://www.github.com/" target="_blank" title="GitHub"><i className="fab fa-github"></i></a></li>
        </ul>
        <p className="text-muted text-center">Copyright &copy; 2022 <a href="#">Kenil</a>. All Rights Reserved.</p>
        <ul className="nav text-2 justify-content-center">
          <li className="nav-item"> <a className="nav-link" data-bs-toggle="modal" data-bs-target="#terms-policy" href="#">Terms & Policy</a></li>
          <li className="nav-item"> <a className="nav-link" data-bs-toggle="modal" data-bs-target="#disclaimer" href="#">Disclaimer</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer