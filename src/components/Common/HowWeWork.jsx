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
            <p>Veja como é super fácil contratar o delivery.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-how-work">
                <h3>01.</h3>
                <h4>Agendamento</h4>
                <p>
                  Entre em contato para discutirmos sobre o caso e agendar o
                  atendimento
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-how-work">
                <h3>02.</h3>
                <h4>Atendimento</h4>
                <p>
                  Vou até sua clínica levando todos equipamentos, materiais e
                  instrumentais necessários para o procedimento
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-how-work">
                <h3>03.</h3>
                <h4>Acompanhamento</h4>
                <p>
                  Após a finalização do atendimento, envio ao indicador um
                  relatório contendo todas as informações do tratamento
                  realizado
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
