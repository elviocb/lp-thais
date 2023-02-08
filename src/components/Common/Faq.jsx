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
              Algumas das perguntas mais frequentes feitas pelos indicadores
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
                        Quais são os valores dos serviços?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Os valores são fixos e disponibilizados ao indicador via
                        WhatsApp.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Como saber se o caso realmente necessita de um
                        endodontista?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Fico à disposição para discutir cada caso, auxiliar no
                        diagnóstico e, se necessário, realizar consulta de
                        avaliação.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Caso haja a necessidade de retorno, é cobrado algum
                        valor adicional?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Não. Os valores são fixos e cobrem todos os retornos
                        necessários para a total resolução do caso.
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
