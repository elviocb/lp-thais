import React from "react";
import testimonialImgOne from "../../assets/images/dr-joao-testimonial-thumb.jpg";
import testimonialImgTwo from "../../assets/images/anselmo-thumb.jpg";
import testimonialImgThree from "../../assets/images/dra-juliane-testimonial-thumb.jpg";
import CtaSection from "./CtaSection";

class Testimonial extends React.Component {
  render() {
    return (
      <section className="testimonials-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="section-title">
            <h2>
              Breves <span>Depoimentos</span>
            </h2>
            <p>Indicadores parceiros que confiam seus casos a mim</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <img src={testimonialImgOne} alt="client-avatar" />
                  </div>

                  <div className="client-title">
                    <h4>Prof. Dr. João Franco</h4>
                    <h5>CRO 70055</h5>
                  </div>
                </div>

                <p>
                  Conheci a Thais na graduação, quando fui seu professor de
                  prótese. Sempre dedicada e eficiente, buscava o melhor para os
                  pacientes. Depois de formada, continuou sua busca por
                  conhecimento e aprimoramento. Hoje, trabalhamos juntos em uma
                  clínica, onde eu tenho a tranquilidade de realizar minhas
                  próteses, dando sequência aos seus procedimentos. Por isso a
                  indico como profissional e como pessoa.
                </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <img src={testimonialImgTwo} alt="client-avatar" />
                  </div>

                  <div className="client-title">
                    <h4>Dr. Anselmo Garcia </h4>
                    <h5>CRO 69964</h5>
                  </div>
                </div>

                <p>
                  Trabalho com a Thais há alguns anos e, desde o início, ela se
                  mostrou uma profissional excelente, que busca sempre se
                  aprimorar. Justa, não faz da odontologia um comércio, mas um
                  ofício de amor, entregando o melhor como profissional e ser
                  humano. E isso é relatado constantemente pelos nossos
                  pacientes, que adoram o acolhimento dado por ela, do pré ao
                  pós-operatório. Organizada e atualizada, possui grande
                  capacidade de gestão clínica e de liderança. Ficamos felizes
                  em tê-la como parte de nossa equipe.
                </p>

                <span>
                  <i className="fa fa-quote-right"></i>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feedback">
                <div className="client-info">
                  <div className="client-pic">
                    <img src={testimonialImgThree} alt="client-avatar" />
                  </div>

                  <div className="client-title">
                    <h4>Dra. Juliane Rodrigues </h4>
                    <h5>CRO 150968</h5>
                  </div>
                </div>

                <p>
                  A Dra. Thais é uma excelente profissional. Ética, responsável
                  e extremamente comprometida. Gosto muito da nossa parceria e
                  os pacientes só têm elogios a respeito dela.
                </p>

                <span>
                  <i className="fa fa-quote-left"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </section>
    );
  }
}

export default Testimonial;
