import Head from 'next/head'
import dynamic from 'next/dynamic'

import {
  Navigation,
  Introduction,
  About,
  Service,
  WhyChoose,
  WorkProcess,
  Client,
  Contact,
  Footer,
} from '../components/elements'

const PortfolioDynamic = dynamic(() => import('../components/elements/Portfolio'), {
  ssr: false
})

const ScrollButton = dynamic(() => import('../components/elements/ScrollButton'), {
  ssr: false
})

export default function HomePage({ information }) {
  const menu = {
    service: information.service.show,
    why_choose: information.why_choose.show,
    portfolio: information.portfolio.show,
    work_process: information.work_process.show,
    client: information.testimonial.show,
  }

  return (
    <div className="side-header">
      <div id="main-wrapper">
        <Head>
          <title>Web Profile</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation 
          menu={menu}
        />
        <div id="content" role="main">
          <Introduction
            profile={information.profile}
          />
          <About 
            profile={information.profile}
            about_more={information.about_more}
          />
          {information.service.show && <Service 
            service={information.service}
          />}
          {information.why_choose.show && <WhyChoose 
            why_choose={information.why_choose}
          />}
          <section className="section bg-primary text-center">
            <div className="container">
              <p className="lead text-white">I am Available for Freelancer.</p>
              <h2 className="text-10 text-white mb-4">Start a project with Me today!</h2>
              <a href="#contact" className="btn btn-light rounded-pill shadow-none smooth-scroll mt-2">Hire Me</a> 
            </div>
          </section>
          {information.portfolio.show && <PortfolioDynamic 
            portfolio={information?.portfolio}
          />}
          {information.work_process.show && <WorkProcess 
            work_process={information?.work_process}
          />}
          <Client 
            testimonial={information?.testimonial}
            partner={information?.partner}
          />
          <Contact 
            profile={information?.profile}
          />
        </div>
        <Footer />
        <ScrollButton />
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const url = process.env.NEXT_PUBLIC_API_HOST + "/information"

  const res = await fetch(url)
  const information = await res.json()

  return {
    props: {
      information,
    }
  }
}