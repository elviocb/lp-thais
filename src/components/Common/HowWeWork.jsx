import React from "react";
import CtaSection from "./CtaSection";

class HowWeWork extends React.Component {
  render() {
    return (
      <section className="how-work ptb-80" id="howitworks">
        <div className="container">
          <div className="section-title">
            <h2>
              Como <span>Funciona</span>
            </h2>
            <p>Confira abaixo os passos para contratar o delivery</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-how-work">
                <h3>01.</h3>
                <h4>Agendamento</h4>
                <p>
                  Entre em contato para discutirmos sobre o caso e agendarmos o
                  atendimento
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-how-work">
                <h3>02.</h3>
                <h4>Atendimento</h4>
                <p>
                  Na sua clínica, realizo os procedimentos, levando todos
                  equipamentos, materiais e instrumentais necessários
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-how-work">
                <h3>03.</h3>
                <h4>Acompanhamento</h4>
                <p>
                  Após finalizar o atendimento, envio um relatório completo com
                  as informações do tratamento realizado
                </p>
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </section>
    );
  }
}

export default HowWeWork;
