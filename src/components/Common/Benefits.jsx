import React from "react";
import CtaSection from "./CtaSection";

class Benefits extends React.Component {
  render() {
    return (
      <section className="who-we-are ptb-80 bg-f6f6f6" id="benefits">
        <div className="container">
          <div className="section-title">
            <h2>
              Vantagens do <span>Endo Delivery</span>
            </h2>
            <p>
              Saiba porque contratar um dentista especialista delivery para seus
              atendimentos
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-graduation-cap"></i>
                <h4>Excelência</h4>
                <p>
                  Por se dedicar exclusivamente à área, o especialista estuda e
                  se atualiza constantemente, deixando o indicador com a certeza
                  de que oferecerá o que há de mais moderno na endodontia
                </p>
                <span>1</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-bolt"></i>
                <h4>Efetividade</h4>
                <p>
                  O tratamento feito por especialista, na maior parte dos casos,
                  encerra-se em uma única sessão, garantindo ao indicador
                  trabalho de excelência e previsibilidade
                </p>
                <span>2</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-thumbs-up"></i>
                <h4>Despreocupação</h4>
                <p>
                  Por estar sempre atualizado em relação a equipamentos e
                  técnicas, cabe ao profissional delivery levar à clínica
                  parceira, no dia do atendimento, equipamentos, instrumental e
                  materiais necessários
                </p>
                <span>3</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-scissors"></i>
                <h4>Economia</h4>
                <p>
                  Há duas grandes vantagens de se contratar um profissional
                  delivery: ocupar a sala de atendimento somente no período
                  agendado e não precisar encaminhar o paciente a outra clínica
                </p>
                <span>4</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-refresh"></i>
                <h4>Retorno</h4>
                <p>
                  O endodotista delivery fica disponível para retornar à clínica
                  do indicador, sempre que necessário, em todos os casos
                </p>
                <span>5</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-heartbeat"></i>
                <h4>Pós-operatório</h4>
                <p>
                  Cabe ao especialista delivery a responsabilidade de dar as
                  orientações sobre o pós-operatório, bem como atender qualquer
                  dúvida do paciente e/ou do indicador
                </p>
                <span>6</span>
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </section>
    );
  }
}

export default Benefits;
