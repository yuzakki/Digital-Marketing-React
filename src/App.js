import "./css/normalize.css"
import "./css/style.css"
import "./css/all.min.css"
import Header from './components/header'
import Footer from './components/footer'
import Spinner from './components/spinner'

// [Script] => Import all imgs from assets From importingScript file
import { images } from './components/importingScript';


function App() {
  return (
    <>
    <Header /> 
    <Spinner />
      <div className="hero">
      <div className="container-fluid px-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={images["./carousel-1.jpg"]} alt="Image" ></img>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 text-start">
                      <p className="fs-4 text-white animated slideInRight">Welcome to <strong>GrowMark</strong></p>
                      <h1 className="display-1 text-white mb-4 animated slideInRight">Unlock Your Business Growth</h1>
                      <a href className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={images['./carousel-1.jpg']} alt="Image"></img>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 text-end">
                      <p className="fs-4 text-white animated slideInLeft">Welcome to <strong>GrowMark</strong></p>
                      <h1 className="display-1 text-white mb-5 animated slideInLeft">Ready to Grow Your Business</h1>
                      <a href className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
      {/* === Start Features === */}
      <div className="features my-5 py-5"> 
      <div class="container text-center">
        <div class="row g-0 feature-row">
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src={images['./icon/icon-1.png']} alt="Icon" />
              </div>
              <h5 className="mb-3">Award Winning</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src={images['./icon/icon-2.png']} alt="Icon" />
              </div>
              <h5 className="mb-3">Professional Staff</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src={images['./icon/icon-3.png']} alt="Icon" />
              </div>
              <h5 className="mb-3">Fair Prices</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src={images['./icon/icon-4.png']} alt="Icon" />
              </div>
              <h5 className="mb-3">24/7 Support</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* === End Features === */}
      <Footer />
    </>
  );
}

export default App;