import React from "react";
import CtaButton from "./CtaButton";

class Strategy extends React.Component {
  render() {
    return (
      <section className="strategy-area" id="about">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-5 col-sm-12">
              <div className="image"></div>
            </div>

            <div className="col-lg-6 col-md-7 col-sm-12">
              <div className="about-strategy ptb-80">
                <div className="section-title">
                  <h4>Mas afinal...</h4>
                  <h2>
                    Quem é a Dra. <span>Thais Coqueiro?</span>
                  </h2>
                  <p>
                    Dentista graduada desde 2018, com especialização em
                    endodontia pela Faculdade de Odontologia da APCD (FAOA) e
                    pós-graduação em ortodontia, em andamento, pelo Instituto
                    Vellini.
                  </p>
                  <br />
                  <p>
                    Sou uma profissional altamente capacitada, que pesquisa e
                    estuda constantemente, com intuito de conhecer e dominar as
                    técnicas e os procedimentos mais avançados na área.
                    Detalhista, dedico-me não apenas a oferecer tratamento, mas
                    também a zelar pelo bem-estar dos pacientes.
                  </p>
                </div>
                <CtaButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Strategy;
