import React from "react";

import featImage from "../../assets/images/foto-hero-v3.png";
import CtaButton from "../Common/CtaButton";

class MainBanner extends React.Component {
  render() {
    return (
      <div id="hero" className="main-banner item-bg-xray">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container banner-container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <div className="main-banner-text">
                      <h4>Endo Delivery</h4>
                      <h1>
                        Você precisa de uma <span>Endodontista</span> na sua
                        clínica?
                      </h1>
                      <p>
                        Se você é de São Paulo ou região e precisa de uma
                        especialista para realizar os tratamentos endodônticos
                        da sua clínica
                      </p>
                      <CtaButton />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12  main-banner-image">
                  <div className="pic">
                    <img src={featImage} alt="thais-coqueiro-endodontista" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
