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
              Você quer saber por que contratar um dentista especialista
              delivery para os atendimentos?
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-graduation-cap"></i>
                <h4>Competência</h4>
                <p>
                  Um especialista estuda e se atualiza constantemente com tudo
                  que há de moderno na área que atua, deixando o indicador
                  tranquilo para realizar o procedimento seguinte.
                </p>
                <span>1</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-bolt"></i>
                <h4>Rapidez</h4>
                <p>
                  Um tratamento feito por especialista tem uma previsibilidade e
                  conduta melhor, tendo em sua maioria dos casos finalização em
                  sessão única
                </p>
                <span>2</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-thumbs-up"></i>
                <h4>Sem preocupação</h4>
                <p>
                  O profissional delivery fica responsável por separar e ter
                  todo o equipamento, instrumental e material necessário para o
                  atendimento
                </p>
                <span>3</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-scissors"></i>
                <h4>Menor custo</h4>
                <p>
                  A principal vantagem ao indicador de ter um profissional
                  delivery é a ocupação da sala de atendimento somente no
                  período agendado e também não precisar deslocar o paciente à
                  outra clínica
                </p>
                <span>4</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-refresh"></i>
                <h4>Retorno se Necessário</h4>
                <p>
                  O endo delivery fica disponível para retornar se necessário em
                  todos os casos
                </p>
                <span>5</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-who-we-are">
                <i className="fa fa-heartbeat"></i>
                <h4>Pós-operatório</h4>
                <p>
                  O especialista fica responsável pelas orientações
                  pós-operatórias e disponível para qualquer dúvida do paciente
                  e/ou indicador
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
