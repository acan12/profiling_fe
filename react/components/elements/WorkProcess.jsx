/* eslint-disable */
import parser from "html-react-parser"

const WorkProcess = ({ work_process }) => {
  return (
    <section id="process" className="section bg-light">
      <div className="container"> 
        <div className="row mb-5">
          <div className="col-lg-9 col-xl-8 mx-auto text-center">
            <h2 className="fw-600 mb-3">Work Process</h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <div className="text-4 text-muted">
              {parser(work_process?.desc)}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row gy-5">
              {
                work_process?.steps.map(key => (
                  <div key={key?.id} className="col-md-6">
                    <div className="featured-box style-3">
                      <div className="featured-box-icon text-primary border border-primary border-3 rounded-circle"> <span className="text-8 fw-600">{key?.sort_order}</span></div>
                      <h3 className="text-5">{key?.title}</h3>
                      <p className="text-muted mb-0">{key?.desc}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess