// import "./services.css";

import Lottie from "lottie-react";
import servicesAnimation from "../../../public/animation/services.json";
import './services.css'
import Slide from "./../Slide";
import Box from "./../Box";

const Services = () => {
  return (
    <section className="services" id="services">
       <Slide delay={0.6}>
        <h2 className="title mb-5">Our Services</h2>
      </Slide>
      <Box
        num={
          <div className="row">
            {/* col */}
            <div
              className="col col-12 col-lg-4 col-md-6 col-sm-6"
              id="section1"
            >
              <Slide>
                <div className="srv flex">
                  <i className="icon-embed2"></i>
                  <div className="text">
                    <h3>Web Development</h3>
                    <p>
                    I can build a website by Using HTML,CSS Javascript
                      Bootstrap and React.
                    </p>
                  </div>
                </div>
                <div className="srv flex">
                  <i className="icon-mobile-devices"></i>
                  <div className="text">
                    <h3>Responsive Design</h3>
                    <p>
                      Your Website Will be 100% responsive for all devices:
                      Tablets and Smart Phones.
                    </p>
                  </div>
                </div>
              </Slide>
            </div>

            {/* col */}
            <div
              className="col col-12 col-lg-4 col-md-6 col-sm-6"
              id="section2"
            >
              <Slide delay={0.4}>
                <div className="srv flex">
                  <i className="icon-create"></i>
                  <div className="text">
                    <h3>Creative Design</h3>
                    <p>
                      I can edit your current website by adding a new content to
                      make it much better.
                    </p>
                  </div>
                </div>
                <div className="srv flex">
                  <i className="icon-bulb"></i>
                  <div className="text">
                    <h3>Web Ideas</h3>
                    <p>
                      I could turn your ideas into a real projects with high
                      quality.
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
            {/* col */}
            <div
              className="col col-12 col-lg-4 col-md-6 col-sm-6 img"
              id="section3"
            >
              <Slide delay={0.6}>
                <Lottie
                  className=""
                  style={{ height: 355 }}
                  animationData={servicesAnimation}
                  onLoadedImages={() => {
                    lottieRef.current.setSpeed(0.4);
                  }}
                />
              </Slide>
            </div>
          </div>
        }
      />
    </section>
  );
};
export default Services;
