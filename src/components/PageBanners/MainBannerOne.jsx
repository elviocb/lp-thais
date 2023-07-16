import React from "react";

import CtaButton from "../Common/CtaButton";

class MainBanner extends React.Component {
  render() {
    return (
      <div id="hero" className="main-banner item-bg-xray">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container banner-container h-100">
              <div className="row h-100">
                <div className="col-lg-4 col-md-12  main-banner-image">
                  {/* <div className="pic">
                    <img src={featImage} alt="thais-coqueiro-endodontista" />
                  </div> */}
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="main-banner-content">
                    <div className="main-banner-text">
                      <h4>Endo Delivery</h4>
                      <h1>
                        Você precisa de uma <span>Endodontista</span> na sua
                        clínica?
                      </h1>
                      <p>
                        Se você é da região metropolitana de São Paulo e precisa
                        de uma especialista para realizar tratamentos
                        endodônticos
                      </p>
                      <CtaButton btnText="Agende uma parceria" />
                    </div>
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
