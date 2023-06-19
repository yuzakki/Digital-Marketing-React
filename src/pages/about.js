import Header from '../components/header'
import Footer from '../components/footer'
import Eachpart from "../components/eachpart";
import './about.css'
// [Script] => Import all imgs from assets From importingScript file
import { images } from '../components/importingScript';

const About = ({page}) => {
  return (
    <>
      <Header />
      <Eachpart pageName="About" />

      {/* About Section */}
      <div pageName="About" className="container-xxl about mb-5" style={{marginTop: '6rem'}}>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="h-100 d-flex align-items-center justify-content-center" style={{minHeight: '300px'}}>
                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                  <span />
                </button>
              </div>
            </div>
            <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}}>
              <div className="bg-white rounded-top p-5 mt-lg-5">
                <p className="fs-5 fw-medium text-primary">About Us</p>
                <h1 className="display-6 mb-4">The Best Marketing Agency to Improve Your Business</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                <div className="row g-5 pt-2 mb-5">
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src={images["./icon/icon-1.png"]}  alt="icon" />
                    <h5 className="mb-3">Managed Services</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src={images["./icon/icon-2.png"]}  alt="icon" />
                    <h5 className="mb-3">Dedicated Experts</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                </div>
                <a className="btn btn-primary rounded-pill py-3 px-5" href>Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;