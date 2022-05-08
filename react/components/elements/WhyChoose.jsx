/* eslint-disable */ 
import parse from "html-react-parser"

const WhyChoose = ({ why_choose: { different, skill } }) => (
  <section id="why-choose" className="section">
    <div className="container"> 
      <div className="row mb-5">
        <div className="col-lg-9 col-xl-8 mx-auto text-center">
          <h2 className="fw-600 mb-3">Why I'm Different?</h2>
          <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
          <div className="text-4 text-muted">
            {parse(different?.desc)}
          </div>
        </div>
      </div>
      
      <div className="row justify-content-center mb-md-4">
        {
          different?.items.map(key => (
            <div key={key.id} className="col-md-6 col-lg-4 mb-5">
              <div className="featured-box style-3">
                <div className="featured-box-icon text-primary border rounded-circle"> <i className="fas fa-fingerprint"></i></div>
                <h3>{key?.label}</h3>
                <p className="text-muted mb-0">{key?.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 text-center">
          <div className="hero-wrap section h-100 rounded shadow-lg p-5">
            <div className="hero-mask opacity-6 bg-dark rounded"></div>
            <div className="hero-bg hero-bg-scroll rounded" style={{ backgroundImage: `url(${skill?.thumbnail_video_url})`}}></div>
            <div className="hero-content h-100 d-flex flex-column align-items-center justify-content-center py-5"> <a className="btn-video-play popup-youtube" href={skill?.video_url}><i className="fas fa-play"></i></a>
              <p className="text-white fw-500 text-uppercase mt-3 mb-0">Play &amp; Watch!</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 align-self-center mt-5 mt-md-0">
          <div className="px-lg-4">
            <h3 className="text-6 mb-3">My Skills</h3>
            <div className="text-muted">
              {parse(skill.desc)}
            </div>
            {
              skill?.items.map(key => {
                return <div key={key?.id}>
                  <p className="fw-500 text-start mb-2">{key?.label} <span className="float-end">{key?.value}%</span></p>
                  <div className="progress progress-sm mb-4">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${key?.value}%` }} aria-valuenow={key?.value} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhyChoose