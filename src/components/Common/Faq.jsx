import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class Faq extends React.Component {
  render() {
    return (
      <section className="faq-area ptb-80" id="faq">
        <div className="container">
          <div className="section-title">
            <h2>
              Perguntas <span>Frequentes</span>
            </h2>
            <p>
              Algumas das perguntas mais frequentes realizadas pelos
              indicadores.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div
                className="accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Como funciona os valores?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Os valores são fixos e disponibilizados ao indicador via
                        WhatsApp
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Como saber se o dente realmente precisa de endodontia?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Me coloco a disposição para discussão de casos, auxílio
                        em diagnósticos e se necessário consulta de avaliação
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Caso necessite de retorno, é cobrado algum valor
                        adicional?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Não, os valores são fixos e estão inclusos quantos
                        retornos forem necessários para o mesmo caso.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* <div className="col-lg-5 col-md-12">
              <div className="image"></div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
